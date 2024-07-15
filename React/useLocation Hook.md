# `useLocation` Hook - React Router

## Introduction

The `useLocation` hook is part of the `react-router-dom` library, which provides declarative routing for React applications. This hook returns the current location object, allowing you to access the current URL and other related information. It's particularly useful for conditionally rendering components or performing actions based on the current route.

## Installation

Before using `useLocation`, ensure you have `react-router-dom` installed in your project:

```bash
npm install react-router-dom
```

## Usage

### Importing the Hook

To use the `useLocation` hook, you need to import it from `react-router-dom`:

```javascript
import { useLocation } from "react-router-dom";
```

### Basic Example

Here's a basic example of how to use `useLocation` to log the current pathname:

```javascript
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log("Current route is:", location.pathname);
  }, [location]);

  return (
    <div>
      <h1>My App</h1>
    </div>
  );
}

export default App;
```

### Accessing Location Properties

The `location` object returned by `useLocation` contains several properties:

- `pathname`: The path of the URL (e.g., `/home`).
- `search`: The query string (e.g., `?query=string`).
- `hash`: The hash fragment (e.g., `#section`).
- `state`: State passed via a `Link` component or navigation.

### Detailed Example

Here's a more detailed example that demonstrates accessing different properties of the `location` object:

```javascript
import React from "react";
import { useLocation } from "react-router-dom";

function LocationDetails() {
  const location = useLocation();

  return (
    <div>
      <h2>Location Details</h2>
      <p>
        <strong>Pathname:</strong> {location.pathname}
      </p>
      <p>
        <strong>Search:</strong> {location.search}
      </p>
      <p>
        <strong>Hash:</strong> {location.hash}
      </p>
      <p>
        <strong>State:</strong> {JSON.stringify(location.state)}
      </p>
    </div>
  );
}

export default LocationDetails;
```

### Conditional Rendering

You can use `useLocation` to conditionally render components based on the current route:

```javascript
import React from "react";
import { useLocation } from "react-router-dom";

function ConditionalRendering() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/special" ? (
        <p>This is the special page!</p>
      ) : (
        <p>Welcome to my app!</p>
      )}
    </div>
  );
}

export default ConditionalRendering;
```

### Common Patterns

#### Tracking Navigation

You can track navigation changes by using the `useEffect` hook with `useLocation`:

```javascript
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TrackNavigation() {
  const location = useLocation();

  useEffect(() => {
    console.log("Navigated to:", location.pathname);
  }, [location]);

  return null;
}

export default TrackNavigation;
```

#### Using Location State

Pass state with a `Link` and access it using `useLocation`:

```javascript
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={{ pathname: "/about", state: { fromHome: true } }}>
        Go to About
      </Link>
    </div>
  );
}

function About() {
  const location = useLocation();

  return (
    <div>
      <h2>About Page</h2>
      {location.state && location.state.fromHome && (
        <p>You came from the Home page!</p>
      )}
    </div>
  );
}

export default { Home, About };
```

## References

- [React Router Documentation](https://reactrouter.com/)
- [React Router API: useLocation](https://reactrouter.com/web/api/useLocation)
