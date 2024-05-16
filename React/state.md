# STATE IN REACT

## What is state?

**State** is data that a component can hold over time to keep information that it needs to remeber throughout the app's lifecycle. So it's like a memory of a component. _State variable_ or _piece of state_ is just single variable of a component.

When the state is updated, React automatically re-render the component, so it updates the _view of component_. All _components views_ together create _UI_. State is preserved throughout the components re-renders. When components completly disappears from the UI (called _unmounting_) then the state returns back to default.

## How to use state?

To use state in a component you need:

1. add a new state variable
2. use it in a code and usually in JSX
3. update the piece of state

### useState

**useState** React method:

- remember to import it -> `import { useState } from "react";`
- since the useState is a _hook_ (because it starts with "use") you can use hooks only on _top level_ of a component function, not inside any nested block ( nested scope)
- `useState(a)` -> "a" is the default value of the state
- useState returns an array -> `const array = useState(a)`
- the array's _index 0_ is the variable and _index 1_ is the function used to update the state
- so usually you should immediatly destructure it:
  `const [variable, setVariable] = useState(1);`
- you should update state only using the provided function, never manually
- also if you need to update state _based on current state_ you should use callback funtion like `setStep((step) => step - 1)` and not just `setStep(step - 1)`

**example**:

```javascript
import { useState } from "react";

function App() {
  // useState immediatly destructured into the variable and the function to update it
  const [step, setStep] = useState(1);

  // callback function for event listeners
  const handlePreviuos = function () {
    // using the destructured function of useState to update state
    // also put if statement to check the variable doesn't go below 1
    if (step > 1) setStep(step - 1);
  };

  const handleNext = function () {
    if (step < 3) setStep(step + 1);
  };

  return (
    <div>
      <button onClick={handlePreviuos}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
```

### useReducer

### Context API

## Think about state

### why to use state?

### where to place state?

### types of state
