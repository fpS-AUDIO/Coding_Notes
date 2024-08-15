# `useQuery` Custom Hook Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Basic Usage](#basic-usage)
4. [Core Concepts](#core-concepts)
   - [Query Keys](#query-keys)
   - [Stale Time and Cache Time](#stale-time-and-cache-time)
   - [Refetching](#refetching)
   - [Query Invalidation](#query-invalidation)
   - [Query States](#query-states)
5. [Examples](#examples)
   - [Basic Query](#basic-query)
   - [Query with Parameters](#query-with-parameters)
   - [Polling/Refetching](#pollingrefetching)
   - [Dependent Queries](#dependent-queries)
6. [Common Patterns](#common-patterns)
7. [Best Practices](#best-practices)
8. [Conclusion](#conclusion)

---

## Introduction

`useQuery` is a powerful hook provided by the React Query library that is used to fetch, cache, and update data in React applications. It simplifies data-fetching logic by providing a clean API for managing server state. React Query handles caching, synchronization, and background updates, making it an essential tool for building responsive and reliable applications.

## Installation

To use the `useQuery` hook, install React Query in your project:

```bash
npm install @tanstack/react-query
```

or with Yarn:

```bash
yarn add @tanstack/react-query
```

You may also want to install the DevTools for easier debugging:

```bash
npm install @tanstack/react-query-devtools
```

## Basic Usage

The `useQuery` hook requires a unique key and a function that returns a promise to fetch the data. The hook returns several properties like `data`, `error`, and `isLoading` to manage the query state in your component.

```javascript
import { useQuery } from "@tanstack/react-query";

const fetchTodos = async () => {
  const response = await fetch("/api/todos");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Todos = () => {
  const { data, error, isLoading } = useQuery(["todos"], fetchTodos);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

## Core Concepts

### Query Keys

Query keys are unique identifiers for queries. They allow React Query to differentiate between different data sources. The query key can be a string or an array that includes parameters.

```javascript
const { data } = useQuery(["todos", { status: "completed" }], fetchTodos);
```

### Stale Time and Cache Time

- **Stale Time:** The time during which the data is considered fresh. After this time, the data is marked as stale and may be refetched if necessary.
- **Cache Time:** The time React Query will keep the data in memory after it becomes unused (all components have unmounted).

```javascript
const { data } = useQuery(["todos"], fetchTodos, {
  staleTime: 5000, // 5 seconds
  cacheTime: 10000, // 10 seconds
});
```

### Refetching

React Query supports automatic refetching based on user interaction or after a certain period.

```javascript
const { data } = useQuery(["todos"], fetchTodos, {
  refetchInterval: 60000, // Automatically refetch every 60 seconds
});
```

### Query Invalidation

Queries can be invalidated manually to trigger a refetch, which is useful after performing a mutation.

```javascript
import { useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();
queryClient.invalidateQueries(["todos"]);
```

### Query States

`useQuery` provides several states to manage the data-fetching process:

- `isLoading`: Indicates if the query is currently fetching data.
- `isFetching`: Indicates if the query is fetching in the background.
- `isError`: Indicates if there was an error during the query.
- `isSuccess`: Indicates if the query was successful and data is available.

## Examples

### Basic Query

```javascript
import { useQuery } from "@tanstack/react-query";

const fetchTodos = async () => {
  const response = await fetch("/api/todos");
  return response.json();
};

const Todos = () => {
  const { data, error, isLoading } = useQuery(["todos"], fetchTodos);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

### Query with Parameters

```javascript
import { useQuery } from "@tanstack/react-query";

const fetchTodosByStatus = async (status) => {
  const response = await fetch(`/api/todos?status=${status}`);
  return response.json();
};

const TodosByStatus = ({ status }) => {
  const { data, error, isLoading } = useQuery(["todos", { status }], () =>
    fetchTodosByStatus(status)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

### Polling/Refetching

```javascript
import { useQuery } from "@tanstack/react-query";

const fetchTodos = async () => {
  const response = await fetch("/api/todos");
  return response.json();
};

const PollingTodos = () => {
  const { data, error, isLoading } = useQuery(["todos"], fetchTodos, {
    refetchInterval: 10000, // Refetch every 10 seconds
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

### Dependent Queries

```javascript
import { useQuery } from "@tanstack/react-query";

const fetchUser = async (userId) => {
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
};

const fetchTodosByUser = async (userId) => {
  const response = await fetch(`/api/todos?userId=${userId}`);
  return response.json();
};

const UserTodos = ({ userId }) => {
  const { data: user } = useQuery(["user", userId], () => fetchUser(userId));
  const { data: todos } = useQuery(
    ["todos", userId],
    () => fetchTodosByUser(userId),
    {
      enabled: !!userId, // Only run this query if userId is available
    }
  );

  if (!userId) return <p>No user ID provided</p>;
  if (!user) return <p>Loading user...</p>;
  if (!todos) return <p>Loading todos...</p>;

  return (
    <div>
      <h2>{user.name}'s Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};
```

## Common Patterns

1. **Prefetching:** Prefetch data before a user navigates to a new page to improve perceived performance.
2. **Optimistic Updates:** Immediately update the UI before the mutation is complete, and roll back if the mutation fails.
3. **Pagination and Infinite Scroll:** Implement pagination or infinite scroll using `useQuery` with a combination of query keys and page parameters.

## Best Practices

- **Use Descriptive Query Keys:** Always use clear and descriptive query keys that reflect the data being fetched.
- **Leverage the `enabled` Option:** Conditionally fetch data by setting the `enabled` option to avoid unnecessary network requests.
- **Handle Errors Gracefully:** Always manage errors in your queries to improve user experience.
- **Use Query Invalidation Wisely:** Invalidate queries only when necessary to prevent redundant refetching.
