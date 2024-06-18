# Custom Hooks in React

When you need to reuse a piece of UI, you use a **component**. However, when you need to reuse a piece of **logic** that involves React hooks, you create a **custom hook**.

## What are Custom Hooks?

- **Custom hooks** allow you to reuse non-visual logic containing React hooks.
- Each hook should ideally do one thing to make it easily reusable.
- Custom hooks libraries can also be downloaded from NPM, created by developers worldwide.
- The **rules of hooks** also apply to custom hooks (e.g., hooks must only be called at the top level).
- They are regular functions that can receive and return any data (usually arrays or objects).
- The function name MUST start with the prefix `use`, such as `useFetch`.

## Why Use Custom Hooks?

- **Separation of Concerns**: Helps keep components clean and focused on rendering UI.
- **Reusability**: Extracts logic into reusable parts that can be shared across components.
- **Maintainability**: Centralizes logic, making it easier to update and debug.

## Creating a Custom Hook

### Basic Example: `useToggle`

A simple hook to toggle a boolean value.

```jsx
import { useState } from "react";

/**
 * A custom hook to toggle a boolean value.
 * @param {boolean} initialValue The initial state value.
 * @returns {[boolean, function]} The current state and a function to toggle it.
 */
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(!value);

  return [value, toggle];
}

export default useToggle;

// Usage example:
const [isVisible, toggleVisibility] = useToggle();
```

### Fetching Data: `useFetch`

A hook to fetch data from an API.

```jsx
import { useState, useEffect } from "react";

/**
 * A custom hook for fetching data.
 * @param {string} url The API endpoint.
 * @returns {[any, boolean, any]} The data, loading state, and any error.
 */
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, loading, error];
}

export default useFetch;

// Usage example:
const [data, isLoading, fetchError] = useFetch("https://api.example.com/data");
```

## Common Patterns

### Input Handling: `useInput`

A hook for managing form inputs.

```jsx
import { useState } from "react";

/**
 * A custom hook for managing input state.
 * @param {string} initialValue The initial value of the input.
 * @returns {[string, function, function]} The value, a change handler, and a reset function.
 */
function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => setValue(e.target.value);
  const reset = () => setValue(initialValue);

  return [value, handleChange, reset];
}

export default useInput;

// Usage example:
const [name, handleNameChange, resetName] = useInput("");
```

### Document Title: `useDocumentTitle`

A hook for setting the document title.

```jsx
import { useEffect } from "react";

/**
 * A custom hook for setting the document title.
 * @param {string} title The title to set.
 */
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useDocumentTitle;

// Usage example:
useDocumentTitle("My Awesome Page");
```

## Best Practices

- **Start with `use`**: Always start custom hook names with `use` to follow convention and to enable React's linting rules.
- **Keep it simple**: Each custom hook should handle one concern or piece of logic.
- **Avoid side effects in loops or conditions**: Follow the rules of hooks to ensure reliable behavior.

## Additional Resources

- [React Hooks Documentation](https://reactjs.org/docs/hooks-overview.html)
- [React Custom Hooks Tutorial](https://reactjs.org/docs/hooks-custom.html)
- [Awesome React Hooks](https://github.com/rehooks/awesome-react-hooks)
