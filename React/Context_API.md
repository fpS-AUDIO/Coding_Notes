# React Context API

## Table of Contents

- [Introduction](#introduction)
- [Creating Context](#creating-context)
- [Providing Context](#providing-context)
- [Consuming Context](#consuming-context)
- [Example](#example)
- [Common Patterns](#common-patterns)
- [Best Practices](#best-practices)
- [References](#references)

---

## Introduction

The Context API is a powerful feature in React that allows you to share values between components without explicitly passing a prop through every level (prop drilling) of the tree. It's particularly useful for managing state that should be accessible throughout an entire application, such as a theme or user authentication state.

### Key Concepts

- **Provider**: a special React component that gives all child components access to a so-called value. It can be placed anywhere in component tree, but usually it should be placed at the top.
- **Value**: data that you wanna make available (like state and functions). When the context value is updated all consumers will automatically be re-rendered.
- **Consumer**: all components that consume the context value.

---

## Creating Context

To create a new context, use the `React.createContext` function. This function returns a context object, which includes a Provider and a Consumer component.

```jsx
// ... in the global scope of main file ...

import { createContext } from "react";

// Create a Context with a default value (ususally default value is not used)
// import React from "react";
// SYNTAX: const MyContext = React.createContext(defaultValue);

// createContext will return a context
// This context is a component and should start with uppercase letter
export const MyContext = createContext();
```

**Note:** The default value is used only if a component does not have a matching Provider above it in the tree.

---

## Providing Context

To make the context value available to the component tree, wrap the components that need access to the context with the Provider component. The Provider takes a `value` prop which holds the data to be shared.

```jsx
import React from "react";
import MyContext from "./MyContext";

export function App({ children }) {
  // In the following component tree the previsly crate context provider component 'MyContext' is the parent of all other components
  // from the component you need to read the '.Provider' property
  // on this component you need to specify the 'value' prop
  // the 'value' prop accepts an object containing all the data which need to be shared to all child components

  return (
    // fake value just to show how it works
    <MyContext.Provider value={{
      theme: `dark`,
      data: dataObject,
      onSubmit: handleSubmit,
      onAddData: handleOnAddData,
    }}>

      <Header />
      <Section />
      <MyComponent />
      <Button />

    </MyContext.Provider>;
  )
}
```

---

## Consuming Context

**Using the `useContext` hook** (React 16.8+):

```jsx
// remember to import 'useContext' hook from React
import React, { useContext } from "react";
import MyContext from "./MyContext";

function MyComponent() {
  // 'useContext' hook accepts an entire context object which is in our case 'MyContext'
  // 'useContext' return entire value passed inside the context (whole object)
  const value = useContext(MyContext);

  return (
    <div>
      <h1 className={value.theme}>
      <button onClick={value.onAddData}>click me</button>
    </div>
  );
}
```

---

## Example

Here’s a complete example of creating, providing, and consuming a context value:

```jsx
// MyContext.js
import React from 'react';
const MyContext = React.createContext();
export default MyContext;


// MyProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider(props) {
  const [state, setState] = useState('Hello World');

  return (
    <MyContext.Provider value={{ state, setState }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyProvider;

// MyComponent.js
import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState('New Value')}>Change Value</button>
    </div>
  );
}

export default MyComponent;

// App.js
import React from 'react';
import MyProvider from './MyProvider';
import MyComponent from './MyComponent';

function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

export default App;
```

In this example, `MyProvider` manages a piece of state and provides it to `MyComponent` through the context.

---

## Common Patterns

- **Nested Providers**: Use nested providers to manage multiple contexts in a modular way.

  ```jsx
  <ThemeContext.Provider value={theme}>
    <UserContext.Provider value={user}>
      <App />
    </UserContext.Provider>
  </ThemeContext.Provider>
  ```

- **Custom Hooks**: Create custom hooks to encapsulate the logic for accessing context values.

  ```jsx
  import { useContext } from "react";
  import MyContext from "./MyContext";

  const useMyContext = () => {
    return useContext(MyContext);
  };

  export default useMyContext;
  ```

- **Context Modules**: Organize context-related logic into separate modules to maintain clean and readable code.

---

### Example of creating custom component and hook to write a cleaner code

```jsx
import { createContext, useState, useEffect, useContext } from "react";

// ----- custom component with Context API and a custom hook

// creating context
const CityContext = createContext();

const CITIES_API = "some randome url here";

// custom component (wrapper)
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // effect to fetch cities list from json-server
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const data = await fetch(`${CITIES_API}/cities`);

        if (!data.ok) return new Error(`Can't fetch cities`);
        const cities = await data.json();

        setCities(() => cities);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  // returing custom component with a provided value
  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

// custom hook to get the context data (like public API)
function useCities() {
  // get the value from context
  const contextValue = useContext(CityContext);

  // guard clause: check if somebody tries to use it outside of context scope
  if (contextValue === undefined)
    throw new Error(`useCities is used outside of the CitiesProvider scope`);

  return contextValue;
}

// exporting custom context component and hook
export { CitiesProvider, useCities };
```

---

## Best Practices

- **Default Values**: Always provide a sensible default value when creating a context.
- **Avoid Overuse**: Context is powerful but can be overused. Use it wisely for global state that truly needs to be shared across many components.
- **Performance Considerations**: Be mindful of performance, especially with frequent state updates that can cause re-renders. Use memoization where appropriate.
- **Encapsulation**: Encapsulate context logic within custom hooks to avoid directly exposing context details to all components.

---

## References

- [React Docs: Context](https://reactjs.org/docs/context.html)
- [Using the Context API in React](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [Advanced Patterns for the Context API](https://kentcdodds.com/blog/application-state-management-with-react)
