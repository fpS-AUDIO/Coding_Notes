# React Hook Form Documentation

## Overview

`react-hook-form` is a performant, flexible, and extensible library that helps you handle forms in React with ease. It minimizes re-renders, provides validation, and manages form state seamlessly, making it an ideal choice for building forms in modern React applications.

### Key Features

- **Minimal re-renders:** Improves performance by reducing unnecessary renders.
- **Built-in validation:** Supports schema-based, custom, and asynchronous validation.
- **Tiny bundle size:** Lightweight, with no dependencies on other libraries.
- **Easy integration:** Compatible with controlled and uncontrolled components.
- **Extensible:** Easily integrates with other libraries like Material-UI, Ant Design, or custom components.

## Installation

You can install `react-hook-form` using npm or yarn:

```bash
# Using npm
npm install react-hook-form

# Using yarn
yarn add react-hook-form
```

## Basic Usage

To start using `react-hook-form`, import the necessary hooks and register your form fields:

```jsx
import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: true })}
        placeholder="First Name"
      />
      {errors.firstName && <span>This field is required</span>}

      <input
        {...register("lastName", { required: true })}
        placeholder="Last Name"
      />
      {errors.lastName && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default App;
```

### Explanation:

- **useForm()**: Initializes the form and provides methods like `register`, `handleSubmit`, and `formState`.
- **register('firstName', { required: true })**: Registers the `firstName` input with validation rules.
- **handleSubmit(onSubmit)**: Handles form submission and triggers validation.
- **errors.firstName**: Contains error information if the validation fails for `firstName`.

## Validation

`react-hook-form` supports a wide range of validation techniques, from simple required fields to complex schema validation.

### Required Field

```jsx
<input
  {...register("email", { required: "Email is required" })}
  placeholder="Email"
/>;
{
  errors.email && <span>{errors.email.message}</span>;
}
```

### Pattern Validation

```jsx
<input
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Invalid email address",
    },
  })}
  placeholder="Email"
/>;
{
  errors.email && <span>{errors.email.message}</span>;
}
```

### Custom Validation

```jsx
<input
  {...register("username", {
    validate: (value) => value !== "admin" || 'Username "admin" is not allowed',
  })}
  placeholder="Username"
/>;
{
  errors.username && <span>{errors.username.message}</span>;
}
```

## Integrating with UI Libraries

You can easily integrate `react-hook-form` with UI libraries like Material-UI:

```jsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

function App() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        rules={{ required: "First name is required" }}
        render={({ field }) => (
          <TextField {...field} label="First Name" variant="outlined" />
        )}
      />
      <input type="submit" />
    </form>
  );
}

export default App;
```

### Explanation:

- **Controller**: A wrapper component that makes it easier to use third-party controlled components with `react-hook-form`.
- **control**: Manages the internal state for controlled components.

## Schema-based Validation

For complex forms, you can use schema-based validation with libraries like `yup`:

```bash
npm install @hookform/resolvers yup
```

```jsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  age: yup.number().positive().integer().required("Age is required"),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First Name" />
      {errors.firstName && <span>{errors.firstName.message}</span>}

      <input {...register("age")} placeholder="Age" type="number" />
      {errors.age && <span>{errors.age.message}</span>}

      <input type="submit" />
    </form>
  );
}

export default App;
```

### Explanation:

- **yupResolver(schema)**: Integrates `yup` validation schema with `react-hook-form`.

## Handling Form State

`react-hook-form` provides detailed form state management out of the box, including:

- **Dirty Fields:** Tracks which fields have been modified.
- **Touched Fields:** Tracks which fields have been interacted with.
- **Is Submitting:** Tracks the form submission process.

Example:

```jsx
const {
  register,
  handleSubmit,
  formState: { isDirty, isValid, isSubmitting },
} = useForm({
  mode: "onChange",
});

<input type="submit" disabled={!isDirty || !isValid || isSubmitting} />;
```

### Explanation:

- **isDirty**: Indicates if any form input has been modified.
- **isValid**: Indicates if the form is valid based on the validation rules.
- **isSubmitting**: Indicates if the form is currently being submitted.

## Conclusion

`react-hook-form` is a powerful library for managing forms in React applications. Its focus on performance, minimal re-renders, and flexibility makes it a great choice for both simple and complex forms. Whether you're building a basic form or integrating with complex UI libraries, `react-hook-form` offers the tools needed to manage forms efficiently.

For more details, check the [official documentation](https://react-hook-form.com).
