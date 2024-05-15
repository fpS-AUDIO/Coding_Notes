# Props

### What are Props

**Props** (short for properties) are used to pass data from parent components to child components (down the component tree). Props are an essential React tool to configure and customize components, functioning like function parameters. Anything can be passed as props, such as values, arrays, objects, functions, and other components.

Since components are made of data, logic, and appearance, the two main data types are state and props. While the state data can be updated by the component itself, the props data comes from outside and can be updated only by the parent component. Since props data can't be modified by child components, we can say that props are **immutable** and read-only.

Mutating props would affect parent components, creating **side effects**. In other words, some data located outside of the current function is changing, which is not pure. Therefore, components should be **pure functions** to allow React to optimize apps, avoid bugs, and ensure predictable logic.

React uses **one-way data flow**, so data can only be passed from parent to child components through props. This helps:

- Apps become more predictable
- Apps are easier to debug
- Apps are more performant

### Example Usage

```javascript
// 1. Passing props inside the parent component like HTML attributes, using {} to enable JS mode
// 2. In the child component function, accept the props parameter
// 3. Use the data by accessing different properties from the props JS object

function App() {
  return (
    <div>
      <h1>Hello React!!!</h1>
      {/* passing props like attributes */}
      <SimpleComponent animal="dog" age={3} />
    </div>
  );
}

// Passing props as a parameter to the child component
function SimpleComponent(props) {
  // Using props
  return (
    <div>
      <h3>I'm a simple component</h3>
      {/* Accessing props */}
      <p>And I received a {props.animal} from the parent component</p>
      <p>
        This {props.animal} is {props.age + 1} years old.
      </p>
    </div>
  );
}

/* Output:
I'm a simple component
And I received a dog from the parent component
This dog is 4 years old.
*/
```

### PropTypes

PropTypes are used to document the intended types of properties passed to components. This helps catch bugs and ensure the component is used correctly.

```javascript
import PropTypes from "prop-types";

function SimpleComponent(props) {
  return (
    <div>
      <h3>I'm a simple component</h3>
      <p>And I received a {props.animal} from the parent component</p>
      <p>
        This {props.animal} is {props.age + 1} years old.
      </p>
    </div>
  );
}

SimpleComponent.propTypes = {
  animal: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
```

### Default Props

You can define default values for props using the `defaultProps` property. This is useful when you want to ensure a component has default values if certain props are not passed.

```javascript
function SimpleComponent(props) {
  return (
    <div>
      <h3>I'm a simple component</h3>
      <p>And I received a {props.animal} from the parent component</p>
      <p>
        This {props.animal} is {props.age + 1} years old.
      </p>
    </div>
  );
}

SimpleComponent.defaultProps = {
  animal: "cat",
  age: 2,
};
```

### Destructuring Props

For readability and simplicity, you can destructure props directly in the function parameter list or inside the function body.

```javascript
// Destructuring in the parameter list
function SimpleComponent({ animal, age }) {
  return (
    <div>
      <h3>I'm a simple component</h3>
      <p>And I received a {animal} from the parent component</p>
      <p>
        This {animal} is {age + 1} years old.
      </p>
    </div>
  );
}

// OR destructuring inside the function body
function SimpleComponent(props) {
  const { animal, age } = props;
  return (
    <div>
      <h3>I'm a simple component</h3>
      <p>And I received a {animal} from the parent component</p>
      <p>
        This {animal} is {age + 1} years old.
      </p>
    </div>
  );
}
```
