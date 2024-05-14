# Props

**Props**:

- Props (properties) are used to pass data from parent components to child components (down the component tree)
- Props are essential React tool to configure and customize components, so they're like function parameters
- Anything can be passed as props like values, arrays, objects, functions, other components etc.

Since components are made of data, logic and appearance, the the 2 main data are: state and props. Meanwhile the state data can be updated by component itself, the props data is coming from outside and can be updated only by the parent component. So, since the props data can't be modified by a child components we can say that props are **immutable**, so they're read-only.

Mutating props would affect parent components, creating **side effect**, in other words some data located outside of the current function is changing and this is not pure. So components should be **pure functions** to allow React optimize apps, avoid bugs and make predictable logic.

React uses **one way data flow**, so data can only be passed from parent to child components, which happens by using props. This helps:

- apps become more predictable
- apps are easier to debug
- apps are more perfomant

```javascript
// 1. passing props inside parent component like html attributes, and using {} to enable js mode
// 2. in child component function accept props parameter
// 3. then use the data by accessing different properties from props JS object

function App() {
  return (
    <div>
      <h1>Hello React!!!</h1>
      {/* passing props like attributes */}
      <SimpleComponent animal="dog" age={3} />
    </div>
  );
}

// passing props as parameter to child component
function SimpleComponent(props) {
  // using props
  return (
    <div>
      <h3>I'm a simple component</h3>
      {/* accessing props */}
      <p>And I recieved a {props.animal} from parent component</p>
      <p>
        This {props.animal} is {props.age + 1} years old.
      </p>
    </div>
  );
}

/* Output:
I'm a simple component
And I recieved a dog from parent component
This dog is 4 years old.
*/
```
