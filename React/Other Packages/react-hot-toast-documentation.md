# React Hot Toast Documentation

## Overview

`react-hot-toast` is a lightweight and customizable toast notification library for React. It allows you to quickly add notifications to your React applications with ease. The library is built with a simple API, offers great customization, and works seamlessly with React.

### Key Features

- **Lightweight:** Small bundle size with no dependencies.
- **Customizable:** Easily style toasts to match your application's design.
- **Flexible:** Support for multiple toast types (success, error, loading, etc.)
- **Animations:** Built-in animations for showing and hiding toasts.

## Installation

You can install `react-hot-toast` using npm or yarn:

```bash
# Using npm
npm install react-hot-toast

# Using yarn
yarn add react-hot-toast
```

## Basic Usage

First, import the library and the `Toaster` component:

```jsx
import React from "react";
import { Toaster, toast } from "react-hot-toast";

function App() {
  return (
    <div>
      <button onClick={() => toast("Hello, world!")}>Show Toast</button>
      <Toaster />
    </div>
  );
}

export default App;
```

### Explanation:

- **toast('Hello, world!')**: Displays a toast notification with the message "Hello, world!".
- **<Toaster />**: A component that should be added to your app once to manage all toast notifications.

## Toast Types

`react-hot-toast` supports different toast types out of the box. Here's how to use them:

### Success Toast

```jsx
toast.success("Operation successful!", {
  duration: 4000,
});
```

### Error Toast

```jsx
toast.error("Something went wrong!", {
  duration: 4000,
});
```

### Loading Toast

```jsx
const toastId = toast.loading("Loading...");

// Later, update to success or error:
toast.success("Loaded successfully!", { id: toastId });
```

### Custom Toast

You can customize the appearance of toasts using the options:

```jsx
toast("Custom Toast", {
  icon: "👏",
  style: {
    border: "1px solid #713200",
    padding: "16px",
    color: "#713200",
  },
});
```

## Configuration

You can configure the `Toaster` component to control the behavior of toasts globally:

```jsx
<Toaster
  position="top-right"
  reverseOrder={false}
  gutter={8}
  toastOptions={{
    duration: 5000,
    style: {
      background: "#363636",
      color: "#fff",
    },
  }}
/>
```

### Explanation:

- **position**: Position of the toast on the screen (e.g., `top-right`, `bottom-left`).
- **reverseOrder**: Whether to reverse the order of toasts.
- **gutter**: Space between toasts.
- **toastOptions**: Default options for all toasts (e.g., `duration`, `style`).

## Dismissing Toasts

You can manually dismiss a toast by calling the `toast.dismiss` method:

```jsx
const toastId = toast("This will disappear soon...");
toast.dismiss(toastId);
```

### Dismissing All Toasts

```jsx
toast.dismiss();
```

## Promise-based Toasts

`react-hot-toast` provides a convenient API to handle toasts in async functions:

```jsx
toast.promise(fetchData(), {
  loading: "Loading...",
  success: "Data fetched successfully!",
  error: "Failed to fetch data.",
});
```

## Common Patterns

### Using Context for Toast Notifications

To make toasts accessible across different components without prop drilling, you can use React Context:

```jsx
import React, { createContext, useContext } from "react";
import { Toaster, toast } from "react-hot-toast";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => (
  <ToastContext.Provider value={toast}>
    {children}
    <Toaster />
  </ToastContext.Provider>
);
```

### Usage

```jsx
import React from "react";
import { ToastProvider, useToast } from "./ToastProvider";

function Component() {
  const toast = useToast();

  return (
    <button onClick={() => toast.success("Context Toast!")}>Show Toast</button>
  );
}

function App() {
  return (
    <ToastProvider>
      <Component />
    </ToastProvider>
  );
}

export default App;
```

For more detailed documentation and advanced usage, visit the [official documentation](https://react-hot-toast.com/).
