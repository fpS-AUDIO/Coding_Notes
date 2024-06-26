# STATE IN REACT - useState

---

#### What is state?

**State** is data that a component can hold over time to keep information that it needs to remeber throughout the app's lifecycle. So it's like a memory of a component. _State variable_ or _piece of state_ is just single variable of a component.

When the state is updated, React automatically re-render the component, so it updates the _view of component_. All _components views_ together create _UI_. State is preserved throughout the components re-renders. When components completly disappears from the UI (called _unmounting_) then the state returns back to default.

#### State management

**State management**:

- _when_ to create a piece of state
- _what_ types of state are necessary
- _where_ to place each piece of state
- _how_ dat flows through the app

#### How to use state?

To use state in a component you need:

1. add a new state variable
2. use it in a code and usually in JSX
3. update the piece of state

**Local state**: is ususally used by one or few child components, and you should always start with local state and pass to global only if you really need that.

**Global state**: is used by many components. You can define global state by using _Contex API_ or some external library like _Redux_.

---

## useState

**useState** React method:

- remember to import it -> `import { useState } from "react";`
- since the useState is a _hook_ (because it starts with "use") you can use hooks only on _top level_ of a component function, not inside any nested block ( nested scope)
- `useState(a)` -> "a" is the default value of the variable (state)
- also React looks at the initial state only during the 1st rendering
- useState returns an array -> `const array = useState(a)`
- the array's _index 0_ is the variable and _index 1_ is the function used to update the variable (state)
- so usually you should immediatly destructure it:
  `const [variable, setVariable] = useState(1);`
- you should update state only using the provided function, never manually
- also, while updating it, you should never mutate existing state variable with set function but return e new one (for example spread the existing array inside a new one plus add one more item)
- also if you need to update state _based on current state_ you should use **callback funtion** like `setStep((step) => step - 1)` and not just `setStep(step - 1)` overwise sometimes it might not work as expected. This is because the updating state is an asynchronous operation, and if you try to access to the updated state right after updating it, the state might not be updated yet (**stale state**) and you give the wrong result.

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

---

#### Initial state using useState (lazy evaluation)

Instead of passing a single value as the initial state of `useState` you can pass (not call) a callback function which will be executed once during the first rendering (for example to get the data from _localStorage_). This function MUST be a pure function and it doesn't accept arguments.

```jsx
// ... inside a component ...

// passing a callback (don't calling it) to get the initial state from local storage
const [watched, setWatched] = useState(function () {
  const localMoviesSTR = localStorage.getItem("watchedMovies");
  return JSON.parse(localMoviesSTR);
});
```
