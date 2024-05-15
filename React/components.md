# Components

### What is a component

React is made from components (even nested), so components are like building blocks of any UI in React. React just takes components and shows them on the webpage.

Every component has its own:

- data (passing data using props)
- logic
- appearance (should be reusable)

### How to create a component

To create a component you need to use a function which should:

- be declared in the top-level code (scope)
- return some markup (JSX) or null
- start with an uppercase letter

Example inside the `index.js`:

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

You can style a component using different options like inline styling, external CSS or SASS files, CSS modules, styled components, or even Tailwind CSS.

Example using inline styles and CSS file:

```javascript
// importing css file
import "./index.css";

function SmallComponent() {
  // to define inline style you need to use a JS object
  // in JSX all the CSS property names are converted to camelCase
  const simpleStyleObj = {
    color: "blue",
    fontSize: "32px",
    textTransform: "uppercase",
  };

  return (
    // use {} to enter JS mode
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

### Styling Options in Detail

#### 1. Inline Styles

Inline styles are useful for dynamic styles, and they are defined as JavaScript objects:

```javascript
const styleObj = {
  color: "blue",
  backgroundColor: "lightgray",
};

function StyledComponent() {
  return <div style={styleObj}>Styled with inline styles</div>;
}
```

#### 2. External CSS

External CSS files can be imported into your component file:

```javascript
import "./App.css";

function ExternalCssComponent() {
  return <div className="external-style">Styled with external CSS</div>;
}
```

#### 3. CSS Modules

CSS Modules help in scoping styles to the component to avoid conflicts:

```javascript
import styles from "./App.module.css";

function CssModuleComponent() {
  return <div className={styles.moduleStyle}>Styled with CSS Module</div>;
}
```

#### 4. Styled Components

Styled-components is a library for React and React Native that allows you to use component-level styles in your application:

```javascript
import styled from "styled-components";

const StyledDiv = styled.div`
  color: blue;
  background-color: lightgray;
`;

function StyledComponentsExample() {
  return <StyledDiv>Styled with styled-components</StyledDiv>;
}
```

#### 5. Tailwind CSS

Tailwind CSS is a utility-first CSS framework for rapidly building custom designs:

```javascript
import "tailwindcss/tailwind.css";

function TailwindComponent() {
  return (
    <div className="text-blue-500 bg-gray-100">Styled with Tailwind CSS</div>
  );
}
```
