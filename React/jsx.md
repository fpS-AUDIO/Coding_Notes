# JSX

### What is JSX

JSX is a **declarative** syntax used to describe what components look like and how they work. Each component should return one block of JSX, which React will render on the UI.

JSX is an extension of JavaScript that allows embedding JS, CSS, and React components into HTML. `Babel`, automatically included inside the project by `create-react-app`, converts JSX to `React.createElement` function calls.

### Imperative vs Declarative

**Imperative**: Approach used in vanilla JavaScript to build a UI. You need to manually select elements, traverse the DOM, attach event handlers, and give step-by-step instructions on how to mutate elements. In other words, in an imperative approach, you need to declare how to achieve a result.

**Declarative**: Approach used to describe how the UI should look based on the current data (state and props). You don't need any DOM manipulation or element selection. In other words, in a declarative approach, you need to declare what result you need.

### Rules of JSX

- Works like HTML but can use JS by using `{}`.
- Inside `{}` you CAN'T use statements like `if/else`, `for`, `switch`.
- Inside `{}` you can place _JS expressions_ (e.g., variables, arrays, objects, ternary operators, use methods like `array.map()`), and other JSX code.
- JSX always produces a JS expression:
  ```javascript
  React.createElement("h1", null, "Hello World!")
  // or using JSX
  <h1>Hello World!</h1>
  ```
- A piece of JSX can have only one root element. If you need more, you can use `<React.Fragment>` or `<>`.

### Differences between React JSX and HTML

- Use `className` instead of HTML's `class`.
- Use `htmlFor` instead of HTML's `for`.
- Every tag should be self-closed like `<br />`.
- All event handlers and other properties (including CSS) should be camelCase like `onClick` or `onMouseOver`.
- Exception: `aria-*` and `data-*` are written with dashes like in HTML.
- CSS inline styles are written inside objects like this: `{{style}}`.
- JS comments should be inside `{}`:
  ```jsx
  {
    /* This is a comment */
  }
  ```

### Advanced JSX Techniques

#### Conditional Rendering

You can use various methods to conditionally render components:

**Ternary Operator:**

```javascript
function MyComponent({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please sign in.</p>}</div>
  );
}
```

**Logical AND (`&&`):**

```javascript
function MyComponent({ isLoggedIn }) {
  return <div>{isLoggedIn && <p>Welcome back!</p>}</div>;
}
```

**Guard Clauses:**
Using multiple returns within a function based on conditions:

```javascript
function MyComponent({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <p>Please sign in.</p>;
  }

  return <p>Welcome back!</p>;
}
```

#### Lists and Keys

Rendering a list of components using `map()` and ensuring each element has a unique `key`:

```javascript
const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

function ItemList() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

#### Fragments

To avoid extra nodes in the DOM, you can use fragments:

```javascript
function FragmentExample() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}
```

#### Inline Styles

Inline styles in JSX must be specified as an object:

```javascript
const divStyle = {
  color: "blue",
  backgroundColor: "lightgray",
};

function StyledDiv() {
  return <div style={divStyle}>Styled content</div>;
}
```

### Best Practices

- **Keep Components Small:** Each component should ideally do one thing.
- **Use PropTypes:** Validate the props passed to components.
- **Avoid Inline Functions:** Define functions outside of JSX to prevent re-creating them on every render.
- **Destructure Props:** For readability and simplicity.
- **Use Fragments:** To group multiple elements without adding extra nodes to the DOM.

```javascript
import PropTypes from "prop-types";

// Component with prop-types validation
function MyComponent({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
```
