# `createBrowserRouter` in React Router

## Introduction and Theory

The `createBrowserRouter` function is a part of React Router, a popular library for handling client-side routing in React applications. This function creates a router object that uses the HTML5 history API (pushState, replaceState, and popstate event) to keep the UI in sync with the URL. It's a fundamental tool for defining routes and navigation within a React app.

---

## Syntax and Parameters

### Basic Syntax

```javascript
import { createBrowserRouter } from "react-router-dom";

// using createBrowserRouter for declarative way of defining routes
// it accepts an array of routes objects
const router = createBrowserRouter([
  // route definitions
]);
```

- **createBrowserRouter**: The main function to create a router instance.
- **Argument**: An array of route objects.

### Route Object Properties

- **path**: The path pattern to match against the URL.
- **element**: The React component to render when the route matches.
- **loader**: A function that loads data before rendering the component.
- **action**: A function that handles actions such as form submissions.
- **children**: Nested routes.

---

### Simple Example

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  {
    // without path Router knows it's from layout
    element: <AppLayout />,
    // children (array) is for nested routes (Outlet)
    children: [
      {
        path: "/",
        element: <HomePage />,
        // The HomePage component will be rendered when the URL is "/"
      },
      {
        path: "about",
        element: <AboutPage />,
        // The AboutPage component will be rendered when the URL is "/about"
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

---

### Advanced Example

#### Loaders

The idea of **loader** is a function that fetches some data from an API. Then you provide that loader function to one of your routes and that route will then fetch that data when app goes to that route. When the data is arrived it will be provided to component by `useLoaderData` hook.

**app**:

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

// using createBrowserRouter for declarative way of defining routes
// it accepts
const router = createBrowserRouter([
  {
    // without path Router knows it's from layout
    element: <AppLayout />,
    // error element in case of errors which bubbles up until this point
    errorElement: <Error />,
    // children (array) is for nested routes (Outlet)
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/menu",
        element: <Menu />,
        // 'loader' property to fetch data during the component rendering (not after)
        loader: menuLoader,
        // if something went wrong during fetching (or another error)
        // the error element will be rendered
        // the errors are bubbled up to the parent element, unless the
        // 'errorElement' property in specified in the child component like below
        // usually they are specified inside child to render them inside layout, not only Error element
        // inside Error element you need to use 'useRouteError' hook
        errorElement: <Error />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/order/new",
        element: <Order />,
      },

      {
        path: "/order/:orderId",
        element: <CreateOrder />,
      },

      // {
      //   path: "*",
      //   element: <ErrorPage />,
      //   // This wildcard route catches all paths that do not match above routes.
      // },
    ],
  },
]);

function App() {
  //
  return <RouterProvider router={router} />;
}

export default App;
```

**component**:

```jsx
// inside a component
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // useLoaderData() automatically return the data associated to the loader of this page
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((pizzaItem) => (
        <MenuItem key={pizzaItem.id} pizza={pizzaItem} />
      ))}
    </ul>
  );
}

// Usually the loader (called that way for convention) is placed
// inside the file of that page for which it provides the data.
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
```

**Error component**:

```jsx
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  // console.log(error);
  // { status: 404, statusText: "Not Found", internal: true, data: 'Error: No route matches URL "/menuu"', error: Error }

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
```

#### Add Loading Indicator

To add a loading indicator while fetching some data you can use `useNavigation` hook.

```jsx
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  // console.log(navigation);
  // { state: "idle", location: undefined, formMethod: undefined, formAction: undefined, formEncType: undefined, formData: undefined, json: undefined, text: undefined }
  // if navigation.state === 'loading' ....

  const isLoading = navigation.state === `loading`;

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
```

---

## Common Patterns

1. **Nested Routes**: Define child routes within parent routes to manage sub-navigation.
2. **Data Loading**: Use loaders to fetch data asynchronously before rendering components.
3. **Error Handling**: Provide fallback routes or components for unmatched paths or errors.
4. **Programmatic Navigation**: Use the `navigate` function to navigate programmatically.

## Additional Resources

- [React Router Documentation](https://reactrouter.com/)
- [React Router GitHub Repository](https://github.com/remix-run/react-router)
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)
