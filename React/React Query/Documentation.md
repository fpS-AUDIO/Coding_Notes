# React Query Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Core Concepts](#core-concepts)
   - [Queries](#queries)
   - [Mutations](#mutations)
   - [Query Keys](#query-keys)
   - [Query Invalidation](#query-invalidation)
4. [Examples](#examples)
   - [Basic Query](#basic-query)
   - [Basic Mutation](#basic-mutation)
   - [Query with Parameters](#query-with-parameters)
   - [Dependent Queries](#dependent-queries)
   - [Query Invalidation](#query-invalidation)
5. [Best Practices](#best-practices)
6. [Common Patterns](#common-patterns)
7. [Error Handling](#error-handling)
8. [Conclusion](#conclusion)

---

## Introduction

React Query is a powerful data-fetching library for React applications. It simplifies the process of fetching, caching, synchronizing, and updating server state. It provides an efficient and declarative way to make data management easier, reducing the boilerplate code often associated with REST or GraphQL data fetching.

So React Query make UX better because of:

- data is stored in the cache
- automatic loading and error state
- automatic re-fetching to keep state synched
- pre-fetching
- easy remote state mutation
- offline support (cache)


## Installation

To install React Query, use the following command:

```bash
npm install @tanstack/react-query
```

or with Yarn:

```bash
yarn add @tanstack/react-query
```

You also need to install `react-query` DevTools for easier debugging:

```bash
npm install @tanstack/react-query-devtools
```

## Core Concepts

### Queries

Queries are the primary method of fetching data in React Query. A query can be as simple as fetching data from an API and as complex as managing caching, synchronization, and background updates.

```javascript
import { useQuery } from "@tanstack/react-query";

const fetchTodos = async () => {
  const response = await fetch("/api/todos");
  return response.json();
};

const { data, error, isLoading } = useQuery(["todos"], fetchTodos);
```

### Mutations

Mutations are used to modify or create data on the server. They are the equivalent of POST, PUT, DELETE operations.

```javascript
import { useMutation } from "@tanstack/react-query";

const addTodo = async (newTodo) => {
  const response = await fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify(newTodo),
  });
  return response.json();
};

const { mutate } = useMutation(addTodo);
```

### Query Keys

Query keys are unique identifiers for queries, allowing React Query to distinguish between different data sources. They can be simple strings or arrays that include parameters.

```javascript
const queryKey = ["todos", { status: "completed" }];
const { data } = useQuery(queryKey, fetchTodos);
```

### Query Invalidation

Query invalidation allows you to manually mark a query as stale, forcing it to refetch. This is often used after mutations to ensure that displayed data is up to date.

```javascript
import { useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();
queryClient.invalidateQueries(["todos"]);
```

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
  if (error) return <p>Error loading todos</p>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

### Basic Mutation

```javascript
import { useMutation, useQueryClient } from "@tanstack/react-query";

const addTodo = async (newTodo) => {
  const response = await fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  return response.json();
};

const NewTodo = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newTodo = {
      title: form.elements.title.value,
    };
    mutation.mutate(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Enter todo title" />
      <button type="submit">Add Todo</button>
    </form>
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
  if (error) return <p>Error loading todos</p>;

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

### Query Invalidation

```javascript
import { useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();
queryClient.invalidateQueries(["todos"]);
```

## Best Practices

- **Use descriptive query keys**: Always use query keys that clearly describe the data being fetched.
- **Leverage the `enabled` option**: Use the `enabled` option to conditionally fetch data.
- **Use query invalidation wisely**: Invalidate queries only when necessary to avoid unnecessary refetches.
- **Error handling**: Always handle errors in your queries and mutations to provide better user feedback.

## Common Patterns

1. **Prefetching**: Prefetch data when the user is likely to navigate to a new page.
2. **Optimistic Updates**: Update the UI optimistically before the mutation is complete to provide a faster user experience.
3. **Pagination and Infinite Scroll**: React Query supports pagination and infinite scrolling out of the box.

## Error Handling

Error handling in React Query is simple and can be done using the `onError` option or by inspecting the `error` returned from `useQuery` or `useMutation`.

```javascript
const { data, error, isLoading } = useQuery(["todos"], fetchTodos, {
  onError: (err) => {
    console.error("Error fetching todos:", err);
  },
});
```

## Conclusion

React Query is an essential tool for managing server state in React applications. It reduces the complexity of data-fetching logic and provides a clean API for handling queries and mutations. By following the best practices and leveraging its features, you can build robust and efficient applications.
