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
// create props example here
```
