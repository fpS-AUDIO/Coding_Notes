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
  // you can get the query using useParams since this functions is outside a component
  // but React Router passes data into loader function, and on of that data is 'params'
  // so you could write this: export async function loader({params}) {
  // then params.queryStringKey
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

### Write Data with React Router Actions

While **loaders** are used to read data, the **actions** are used to write or mutate data (state on server).

**app.jsx**:

```jsx
import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder";

// ...

// connecting action function to React Router
  {
    path: "/order/new",
    element: <CreateOrder />,
    action: createOrderAction,
  },

// ...
```

**CreateOrder.jsx**:

```jsx
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  // some orders...
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  // this is just for feedback for user to disable button
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // check for errors (getting access to the object returned by action function in case of errors)
  const formErrors = useActionData();

  // first you need to use <Form /> component from React Router (not standard <form />)
  // then you need to specify the method: POST, PATCH, DELETE (not GET)
  // then you need to specify the action which is the path where the form should be submitted to
  // if not action is specified the default will be used (React Router will simply match the closest route)
  // example: <Form method="POST" action="/order/new">
  // then you need to create an action (function under component)
  // when <Form /> is submitted a request will be created and intersepted by action function (indeed should be connecte to React Router)
  // this technique doesn't need any submit form function, loading state or controlled elements
  // React Router does everything behind the scene

  // to manage errors just before create a POST request check if everything is ok
  // if not just return an object which will be intersepted by React Router
  // then you can read this data inside the component with 'useActionData' hook
  // to create some UI output for user
  return (
    <div>
      <h2>Ready to order? Let&apos;s go!</h2>

      <Form method="POST" action="/order/new">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
            {/* check if there is any error from useActionData */}
            {formErrors?.phone && formErrors.phone}
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          {/* to add more data to the form (which is outside the form) like cart data */}
          {/* you can use a hidden input field */}
          {/* just if you want to pas an object to need to transform to string it */}
          {/* this way then form will be submitted this data will be also shows in the data but used doesn't see it */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={isSubmitting}>
            {isSubmitting ? "submitting..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

// by convention it's called 'action'
// so when the <Form /> is submitted the request will be passed into this function
//
export async function action({ request }) {
  // formData() is regular browser API which returns formData object
  const formData = await request.formData();

  // then for a better usuability transform no normal object
  const data = Object.fromEntries(formData);

  // creating a nice object to work with
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    // this indeed returns a boolean
    priority: data.priority === "on",
  };

  // checking for errors
  // creating errors object
  const errors = {};

  // checking only phone number just for example
  if (!isValidPhone(order.phone))
    errors.phone = "Please enter a correct phone number";

  // check if there is at least one error
  // if it's return object of errors instead of doing a POST request
  if (Object.keys(errors).length > 0) return errors;

  // createOrder() is an imported function which contains the logic of API POST request
  // this function returns a newly created object (from API)
  // inside the component you can get access to the data returned from this action function
  // in this case it's object of errors
  // this data can be read with useLoaderData hook and create some UI output for user
  const newOrder = await createOrder(order);

  // now you can redirect user to new order Route
  // but you can't use 'useNavigate' since it's outside a component
  // so you can use 'redirect'
  // 'redirect' function will create a new response and it works with web API
  // so if you return a new response from this function the browser will follow that response
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
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
