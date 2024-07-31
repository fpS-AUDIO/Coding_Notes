
# React Router: `useLoaderData` Hook

## Introduction

The `useLoaderData` hook is part of React Router, used to access data fetched by a route's `loader` function. This hook simplifies data fetching by ensuring that the necessary data is available when the component is rendered.

### When to Use

- When you need to fetch data before rendering a route.
- When data needs to be shared across different components within a route.

## Syntax

```javascript
const data = useLoaderData();
```

## Detailed Explanation

- **Loader Function**: This function fetches data before rendering a component. It can be async and typically returns a promise.
- **useLoaderData**: This hook provides the data fetched by the `loader` function directly in the component.

## Example Usage

```javascript
// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import HomePage from './HomePage';
import { loader as homeLoader } from './homeLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    loader: homeLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// homeLoader.js
export async function loader() {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
}

// HomePage.js
import React from 'react';
import { useLoaderData } from 'react-router-dom';

function HomePage() {
  const data = useLoaderData();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Data fetched from loader:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default HomePage;
```

### Comments on the Example

1. **Router Configuration**: The `App` component sets up the router with `createBrowserRouter` and `RouterProvider`.
2. **Loader Function**: Defined in `homeLoader.js`, it fetches data from an API.
3. **Component Data Usage**: In `HomePage.js`, `useLoaderData` is used to access the fetched data.

## Common Patterns

### Error Handling

Use the `useRouteError` hook in combination with `useLoaderData` to handle errors that occur during data fetching.

```javascript
// ErrorBoundary.js
import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  let error = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorBoundary;
```

### Combining with Other Hooks

`useLoaderData` can be used alongside other hooks like `useState` and `useEffect` for more complex state management and side effects.

```javascript
import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Dashboard() {
  const data = useLoaderData();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter data based on some criteria
    setFilteredData(data.filter(item => item.isActive));
  }, [data]);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
```

## Conclusion

The `useLoaderData` hook is a powerful tool in React Router for managing data fetching and state in a declarative manner. By using this hook, developers can ensure that their components receive the necessary data without having to manually manage fetch logic in component lifecycle methods.

## References

- [React Router Documentation](https://reactrouter.com/)
