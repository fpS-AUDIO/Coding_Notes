# `useMutation` Custom Hook Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Basic Usage](#basic-usage)
4. [Core Concepts](#core-concepts)
   - [Mutation Functions](#mutation-functions)
   - [onSuccess and onError Callbacks](#onsuccess-and-onerror-callbacks)
   - [Optimistic Updates](#optimistic-updates)
   - [Invalidate Queries](#invalidate-queries)
5. [Examples](#examples)
   - [Basic Mutation](#basic-mutation)
   - [Mutation with Callbacks](#mutation-with-callbacks)
   - [Optimistic Updates Example](#optimistic-updates-example)
6. [Common Patterns](#common-patterns)
7. [Best Practices](#best-practices)
8. [Conclusion](#conclusion)

---

## Introduction

The `useMutation` hook provided by React Query is used to create, update, or delete data on the server. It is ideal for operations like form submissions or any POST, PUT, DELETE requests. Unlike `useQuery`, `useMutation` does not fetch data; instead, it is used to modify data and handle the consequences of those modifications.

## Installation

To use the `useMutation` hook, ensure that you have React Query installed in your project:

```bash
npm install @tanstack/react-query
```

or with Yarn:

```bash
yarn add @tanstack/react-query
```

## Basic Usage

The `useMutation` hook is used to handle server-side operations like adding, updating, or deleting data. It requires a mutation function that returns a promise and optionally provides callbacks for handling success, error, and other states.

```javascript
import { useMutation } from "@tanstack/react-query";

const addTodo = async (newTodo) => {
  const response = await fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) {
    throw new Error("Failed to add todo");
  }
  return response.json();
};

const NewTodoForm = () => {
  const mutation = useMutation(addTodo);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = { title: event.target.elements.title.value };
    mutation.mutate(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Enter todo title" />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? "Adding..." : "Add Todo"}
      </button>
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>Todo added successfully!</p>}
    </form>
  );
};
```

## Core Concepts

### Mutation Functions

A mutation function is an asynchronous function that performs the desired action on the server, such as creating or updating data. The function should return a promise.

### onSuccess and onError Callbacks

The `useMutation` hook provides several callback options to handle different states of a mutation, such as success or error:

- `onSuccess`: Called when the mutation is successful.
- `onError`: Called when the mutation encounters an error.
- `onSettled`: Called when the mutation is either successful or encounters an error.

```javascript
const mutation = useMutation(addTodo, {
  onSuccess: () => {
    console.log("Todo added successfully!");
  },
  onError: (error) => {
    console.error("Error adding todo:", error);
  },
});
```

### Optimistic Updates

Optimistic updates allow you to update the UI immediately, before the mutation is confirmed by the server. If the mutation fails, the UI can be reverted.

### Invalidate Queries

After a mutation, it's common to invalidate related queries to ensure that the UI reflects the most up-to-date data. This is done using the `useQueryClient` hook.

```javascript
import { useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();
const mutation = useMutation(addTodo, {
  onSuccess: () => {
    queryClient.invalidateQueries(["todos"]);
  },
});
```

## Examples

### Basic Mutation

```javascript
import { useMutation } from "@tanstack/react-query";

const deleteTodo = async (id) => {
  const response = await fetch(`/api/todos/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
  return response.json();
};

const TodoList = ({ todos }) => {
  const mutation = useMutation(deleteTodo);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => mutation.mutate(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
```

### Mutation with Callbacks

```javascript
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateTodo = async (todo) => {
  const response = await fetch(`/api/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error("Failed to update todo");
  }
  return response.json();
};

const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error) => {
      console.error("Error updating todo:", error);
    },
  });

  const handleComplete = () => {
    mutation.mutate({ ...todo, completed: !todo.completed });
  };

  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={handleComplete}>
        {mutation.isLoading ? "Updating..." : "Toggle Complete"}
      </button>
    </div>
  );
};
```

### Optimistic Updates Example

```javascript
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateTodoTitle = async ({ id, newTitle }) => {
  const response = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTitle }),
  });
  if (!response.ok) {
    throw new Error("Failed to update todo title");
  }
  return response.json();
};

const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(updateTodoTitle, {
    onMutate: async (updatedTodo) => {
      await queryClient.cancelQueries(["todos"]);
      const previousTodos = queryClient.getQueryData(["todos"]);
      queryClient.setQueryData(["todos"], (oldTodos) =>
        oldTodos.map((t) =>
          t.id === updatedTodo.id ? { ...t, title: updatedTodo.newTitle } : t
        )
      );
      return { previousTodos };
    },
    onError: (err, updatedTodo, context) => {
      queryClient.setQueryData(["todos"], context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleChangeTitle = () => {
    const newTitle = prompt("Enter new title:", todo.title);
    if (newTitle) {
      mutation.mutate({ id: todo.id, newTitle });
    }
  };

  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={handleChangeTitle}>Edit</button>
    </div>
  );
};
```

## Common Patterns

1. **Optimistic Updates:** Immediately update the UI and roll back if the mutation fails.
2. **Invalidate Related Queries:** Invalidate queries related to the data being mutated to ensure consistency.
3. **Error Handling:** Use `onError` callbacks to handle errors and provide feedback to users.

## Best Practices

- **Use Callbacks Wisely:** Leverage `onSuccess`, `onError`, and `onSettled` callbacks to manage side effects.
- **Optimistic Updates:** Use optimistic updates for better user experience but ensure proper error handling.
- **Invalidate Queries Thoughtfully:** Only invalidate queries when necessary to avoid unnecessary refetching.
