# React Router

---

## What is Routing?

**Routing** is matching different URLs to different UI views, so each of these matches is called a **route**.
Example: `www.example.com` `www.example.com/login` `www.example.com/app`

This type of routing works only on the **client side** (user's browser). React doesn't have "out of the box" the routing capabilities so it's usually handled by **React Router**. This library allows to implement **single page applications** (SPA).

**SPA**:

- executed enirely on the client side relying on the concept of routes
- JS is used to update the DOM (page) and the page is never reloaded
- feels like a native app (mobile or desktop)
- when app needs some additional data web API is used

---

## Installation

To install Router: `npm install react-router-dom`

## Basic Usage

The basic structure of using React Router involves `BrowserRouter`, `Routes`, and `Route`.

```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";

// SYNTAX: <Route path="/login" element={<Component />} />
// '/' is used for standard URL like example.com without any /.../...
// '*' is used for all unexisting routes
function App() {
  return (
    <div>
      <h1>I will not change since I'm outside of Router</h1>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
```

---

## Components of React Router

### `BrowserRouter`

This component is a top-level wrapper that keeps your UI in sync with the URL.

```jsx
import { BrowserRouter as Router } from "react-router-dom";

// Usage in App component
<Router>{/* Routes go here */}</Router>;
```

### `Routes`

The `Routes` component is used to define multiple routes and render the corresponding components.

### `Route`

The `Route` component is used to specify the path and the component that should be rendered when the path matches.

### `Link`

The `Link` component is used for navigation between routes without reloading the page.

```jsx
import { Link } from 'react-router-dom';

<Link to="/">Home</Link>
<Link to="/about">About</Link>
```

### `NavLink`

`NavLink` is similar to `Link`, but it allows you to apply styles to the active link.

```jsx
import { NavLink } from 'react-router-dom';

<NavLink to="/" activeClassName="active">Home</NavLink>
<NavLink to="/about" activeClassName="active">About</NavLink>
```

### `Outlet`

The `Outlet` component is used to render child routes in nested routing.

---

## Nested Routes

Nested routing allows you to render child routes inside a parent route.

```jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet />
    </div>
  );
}

function Profile() {
  return <h3>Profile</h3>;
}

function Settings() {
  return <h3>Settings</h3>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
```

## Programmatic Navigation

Use the `useNavigate` hook for navigation programmatically.

```jsx
import { useNavigate } from "react-router-dom";

function MyComponent() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard");
  }

  return <button onClick={handleClick}>Go to Dashboard</button>;
}
```

## Using URL Parameters

To use URL parameters, define them in your route path and access them using the `useParams` hook.

```jsx
import { useParams } from "react-router-dom";

function User() {
  let { userId } = useParams();

  return <div>User ID: {userId}</div>;
}

// Route definition
<Route path="/user/:userId" element={<User />} />;
```

## Handling 404 Pages

To handle 404 pages, use a `Route` without a `path`.

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## Redirects

Use the `Navigate` component to redirect to another route.

```jsx
import { Navigate } from "react-router-dom";

<Route path="/old-path" element={<Navigate to="/new-path" />} />;
```

## Common Patterns and Best Practices

- **Centralized Route Configuration**: Define your routes in a centralized manner to manage them easily.
- **Lazy Loading**: Load components lazily using `React.lazy` to improve performance.
- **Authentication Guards**: Protect routes by checking authentication status before rendering components.

```jsx
import { useNavigate, Route } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuthenticated = false; // Replace with actual auth check
  let navigate = useNavigate();

  return isAuthenticated ? children : navigate("/login");
}

// Usage
<Route
  path="/protected"
  element={
    <PrivateRoute>
      <ProtectedComponent />
    </PrivateRoute>
  }
/>;
```

---

# Conclusion

This documentation provides a comprehensive guide to using React Router in your React applications. Follow best practices and keep your routing configurations simple and maintainable.
