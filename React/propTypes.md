# React PropTypes

PropTypes is a library that allows you to define and validate the types of props passed to your React components. This helps catch bugs and ensures that components receive the correct data types.

## Installation

To use PropTypes, (if it's not already included) you need to install the prop-types package:

```bash
npm install prop-types
```

## Basic Usage

First, import the PropTypes library:

```jsx
import PropTypes from "prop-types";
```

Then, define the `propTypes` for your component:

```jsx
import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, age, isActive }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Active: {isActive ? "Yes" : "No"}</p>
    </div>
  );
};

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isActive: PropTypes.bool,
};

export default MyComponent;
```

## PropTypes Types

PropTypes provides a variety of validators for different data types:

- `PropTypes.array`: An array.
- `PropTypes.bool`: A boolean.
- `PropTypes.func`: A function.
- `PropTypes.number`: A number.
- `PropTypes.object`: An object.
- `PropTypes.string`: A string.
- `PropTypes.symbol`: A symbol.
- `PropTypes.node`: Anything that can be rendered (numbers, strings, elements, arrays, fragments).
- `PropTypes.element`: A React element.
- `PropTypes.instanceOf`: An instance of a class.
- `PropTypes.oneOf`: An enumeration (one of a set of specific values).
- `PropTypes.oneOfType`: One of a set of types.
- `PropTypes.arrayOf`: An array of a certain type.
- `PropTypes.objectOf`: An object with property values of a certain type.
- `PropTypes.shape`: An object with a specific shape.
- `PropTypes.exact`: An object with an exact shape (no additional properties).

## Advanced Examples

### One Of

Validates that the prop is one of the specified values:

```jsx
MyComponent.propTypes = {
  status: PropTypes.oneOf(["active", "inactive", "pending"]),
};
```

### One Of Type

Validates that the prop matches one of the specified types:

```jsx
MyComponent.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
```

### Array Of

Validates that the prop is an array of a specific type:

```jsx
MyComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};
```

### Object Of

Validates that the prop is an object with property values of a specific type:

```jsx
MyComponent.propTypes = {
  users: PropTypes.objectOf(PropTypes.string),
};
```

### Shape

Validates that the prop is an object with a specific shape:

```jsx
MyComponent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
  }),
};
```

### Exact

Validates that the prop is an object with an exact shape and no additional properties:

```jsx
MyComponent.propTypes = {
  config: PropTypes.exact({
    url: PropTypes.string,
    method: PropTypes.string,
  }),
};
```

## Default Props

You can also define default values for your props using the `defaultProps` property:

```jsx
MyComponent.defaultProps = {
  age: 30,
  isActive: true,
};
```
