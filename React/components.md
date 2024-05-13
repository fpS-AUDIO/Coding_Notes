# Components

### What is a component

React is made from components (even nested), so components are like building blocks of any UI in React. React just take components and show the on the webpage.

Every component has its own:

- data (passing data using props)
- logic
- appearance (should be reusable)

### How to create a component

To create a component you need to use a function which should:

- should be declared in top level code (scope)
- should return some markup (JSX) or null
- should start with uppercase letter

example inside the `index.js`:

```javascript
// CREATING COMPONENT
function SmallComponent() {
  // can return only one element
  return (
    <div>
      <h3>I'm a component</h3>
      <p>Hello, I'm a component</p>
    </div>
  );
}

// CAN BE NESTED INSIDE APP
function App() {
  return (
    <div>
      <h1>Hello React!!!</h1>
      <SmallComponent />
      <SmallComponent />
    </div>
  );
}

// ...THEN RENDERED...
```

### How to style a component

You can style a component using different option like inline styling, using external css or sass files, use CSS modules, styled components, or even Tailwind. Also you can use styled components.

```javascript
// importing css file
import "./index.css";

function SmallComponent() {
  // to define inline style you need to use JS object
  // in JSX all the CSS property names are converted in camelCase
  const simpleStyleObj = {
    color: "blue",
    fontSize: "32px",
    textTransform: "uppercase",
  };

  return (
    // use {} to enter in JS mode
    // define inline style with attribute "style"
    // use "className" instead of "class" attribute to add classes
    <div style={simpleStyleObj}>
      <header className="header">
        <h1>I'm a component</h1>
      </header>
      <p>Hello, I'm a component</p>
    </div>
  );
}
```
