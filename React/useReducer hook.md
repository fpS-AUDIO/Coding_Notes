# `useReducer` Hook in React

## Introduction to `useReducer`

The `useReducer` hook is a React hook that is used for state management in functional components. It is an alternative to the `useState` hook and is more suitable for complex state logic that involves multiple sub-values or when the next state depends on the previous one.

## When to Use `useReducer`

Use `useReducer` in the following scenarios:

- When you have complex state logic that involves multiple sub-values.
- When the next state depends on the previous state.
- When you want to optimize performance for components that trigger deep updates.

## Basic Usage of `useReducer`

The `useReducer` hook accepts two parameters: a reducer function and an initial state. It returns a pair: the current state and a dispatch function.

### Syntax

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

---

### Example

```javascript
// remember to import 'useReducer'
import React, { useReducer } from "react";

// in this case the initial state in an object
const initialState = { count: 0 };

// The 'reducer' is a PURE function called by 'dispatch' function and should
// return the new state based on the current state and action object
// The 'reducer' function takes 2 arguments:
//    1. state: is the current state
//    2. action: is the argument (usually object) passed in the 'dispatch' function which tells how the state should be updated
function reducer(state, action) {
  // check the 'type' property of action object passed as argument in the 'dispatch' function
  // so you can make some decisions of how update the state basing on action type
  if (action.type === "increment") return { count: state.count + 1 };
  if (action.type === "decrement") return { count: state.count - 1 };

  // the state can be also updated using the optional 'payload' property of 'action' object
  // EXAMPLE: if (action.type === "decrement") return { count: state.count - action.payload };
}

function Counter() {
  // useReducer returns and array with 'state' and 'dispatch' (function used to modify the state), so the 'dispatch' triggers the state update.
  // useReducer accepts 2 arguments:
  //  1. 'reducer' function which will be called by 'dispatch'
  //  2.  initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  // passing an object (action) as argument in dispatch function with type property
  // optionally you can pass also the 'payload' property of the action object for more information
  // EXAMPLE: dispatch({ type: "increment", payload: 1 })
  return (
    <div>
      <p>Count: {state.count}</p>

      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default Counter;
```

### Explanation

- The `reducer` function defines how the state is updated based on the action type.
- `dispatch` is a function that you call with an action to update the state.

### Advanced Example

```jsx
import { useReducer } from "react";

const initialState = { count: 0, step: 1 };
function reducer(state, action) {
  switch (action.type) {
    case `inc`:
      // spread the entire object and overwrite the interested property
      return { ...state, count: state.count + state.step };
    case `dec`:
      return { ...state, count: state.count - state.step };
    case `setCount`:
      return { ...state, count: action.payload };
    case `setStep`:
      return { ...state, step: action.payload };
    case `reset`:
      return initialState;
    default:
      throw new Error(`Undefined action...`);
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // This mutates the date object.
  const date = new Date("june 28 2024");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    dispatch({ type: `dec` });
  };

  const inc = function () {
    dispatch({ type: `inc` });
  };

  const defineCount = function (e) {
    dispatch({ type: `setCount`, payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: `setStep`, payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: `reset` });
  };

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
```

---

## Advanced Usage: State Initialization and Lazy Initialization

### State Initialization

You can initialize the state with a more complex value.

```javascript
const initialState = { count: 0, step: 1 };
```

### Lazy Initialization

You can initialize the state lazily by passing an initializer function as the third argument to `useReducer`.

```javascript
function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

### Explanation

- The `init` function is called to initialize the state.

## Combining `useReducer` with `useContext`

You can combine `useReducer` with `useContext` to manage state in a more global context.

```javascript
import React, { useReducer, useContext, createContext } from "react";

const CountContext = createContext();

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

function Counter() {
  const { state, dispatch } = useContext(CountContext);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
```

### Explanation

- `CounterProvider` uses `useReducer` to manage state and provides it via `CountContext`.
- `Counter` consumes the context to access state and dispatch actions.

## Common Patterns

### Handling Multiple Actions

You can handle multiple actions by using a single `reducer`.

```javascript
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      throw new Error();
  }
}
```

### Managing Complex State

For more complex state, use nested objects and handle each state separately.

```javascript
const initialState = {
  count: 0,
  step: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "setStep":
      return { ...state, step: action.payload };
    default:
      throw new Error();
  }
}
```

## Common Pitfalls and Best Practices

### Do Not Mutate State

Always return a new state object instead of mutating the existing one.

```javascript
// Incorrect
function reducer(state, action) {
  state.count += 1;
  return state;
}

// Correct
function reducer(state, action) {
  return { ...state, count: state.count + 1 };
}
```

### Use Action Objects for Clarity

Use action objects with a `type` and `payload` for better readability and scalability.

```javascript
// Better
dispatch({ type: "increment", payload: 1 });
```

### Avoid Overusing `useReducer`

Use `useReducer` only when state logic is complex. For simpler state, `useState` is more straightforward.

```javascript
// Simple state, use `useState`
const [count, setCount] = useState(0);
```
