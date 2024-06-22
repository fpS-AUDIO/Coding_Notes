# Programmatic Navigation in React Using `useNavigate` and `<Navigate />`

## Introduction

In modern React applications, managing navigation effectively is crucial. React Router provides two primary ways to navigate between different views or pages: programmatically using hooks like `useNavigate` and declaratively using components like `<Navigate />`.

---

## Programmatic Navigation with `useNavigate`

### Basic Usage

`useNavigate` is a hook provided by **React Router** that allows you to programmatically navigate to different routes. It's part of React Router v6 and later.

### Example

```javascript
import React from "react";
// remember to import it
import { useNavigate } from "react-router-dom";

const NavigateButton = () => {
  // useNavigate hook return a function which can be used
  // to change route by passing a new one like 'to' attr in <Link />
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the '/about' route
    navigate("/about");
  };

  return <button onClick={handleClick}>Go to About Page</button>;
};

// then the navigate(-1) can be used to go back for example for a back button
```

In this example, clicking the button will take the user to the `/about` route.

### Common Patterns

#### Navigating with State

You can pass state with navigation to carry information across routes.

```javascript
navigate("/profile", { state: { userId: 123 } });
```

#### Conditional Navigation

You can conditionally navigate based on some logic.

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  if (formIsValid) {
    navigate("/success");
  } else {
    navigate("/error");
  }
};
```

#### Dynamic Routing

Navigate to a route with a dynamic segment.

```javascript
const navigateToUser = (userId) => {
  navigate(`/users/${userId}`);
};
```

---

## Declarative Navigation with `<Navigate />`

### Basic Usage

`<Navigate />` is a component that can be used to redirect the user to a different route declaratively within JSX.

### Example

```javascript
import React from "react";
import { Navigate } from "react-router-dom";

const HomePage = ({ userLoggedIn }) => {
  if (!userLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <div>Welcome to the Home Page!</div>;
};
```

In this example, if the user is not logged in, they will be redirected to the `/login` route.

## Understanding the `replace` Keyword

Both `useNavigate` and `<Navigate />` support the `replace` keyword, which controls whether the navigation history is updated.

- **When `replace` is `false` (default):** The navigation is added to the history stack, allowing the user to navigate back to the previous page.
- **When `replace` is `true`:** The current entry in the history stack is replaced with the new entry, preventing the user from navigating back to the previous page.

### Example with `useNavigate`

```javascript
navigate("/dashboard", { replace: true });
```

### Example with `<Navigate />`

```javascript
<Navigate to="/dashboard" replace={true} />
```

## Best Practices and Tips

- **Use `useNavigate` for imperative navigation:** It's useful for navigation in response to events, such as button clicks or form submissions.
- **Use `<Navigate />` for declarative redirects:** Ideal for conditional rendering or redirects based on state or props.
- **Avoid excessive navigation:** Plan your route structure carefully to minimize the need for frequent navigations.
- **Consider user experience:** Ensure that navigation flows are intuitive and enhance the overall user experience.

By understanding and implementing these techniques, you can effectively manage navigation in your React applications, leading to a better user experience and more maintainable code.

---

_Happy coding!_
