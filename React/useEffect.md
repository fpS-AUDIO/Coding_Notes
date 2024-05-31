# `useEffect` Hook in React

The `useEffect` hook is a fundamental part of the React Hooks API, allowing you to perform side effects in function components.

## Basic Usage

The `useEffect` hook takes two arguments: a function (effect) and an optional dependency array.

### Syntax

```javascript
import React, { useEffect } from "react";

useEffect(
  () => {
    // Your effect code here
    return () => {
      // Optional cleanup code here
    };
  },
  [
    /* dependencies */
  ]
);
```

### Example

```javascript
import React, { useState, useEffect } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Re-run the effect when `count` changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ExampleComponent;
```

In this example, the document title is updated every time the `count` variable changes.

## Dependencies

The dependency array allows you to control when the effect runs. The effect will only run if one of the dependencies has changed.

### No Dependencies

If you don't provide a dependency array, the effect will run after every render.

```javascript
useEffect(() => {
  // This runs after every render
});
```

### Empty Dependency Array

If you provide an empty dependency array, the effect will only run once, similar to `componentDidMount`.

```javascript
useEffect(() => {
  // This runs only once
}, []);
```

### Specific Dependencies

List specific variables in the dependency array to run the effect when those variables change.

```javascript
useEffect(() => {
  // This runs when `variable` changes
}, [variable]);
```

## Cleanup

Effects can optionally return a cleanup function. React will run the cleanup function when the component unmounts or before running the effect again (if dependencies have changed).

### Example with Cleanup

```javascript
useEffect(() => {
  const handleResize = () => {
    console.log("Resized");
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []); // Empty array ensures the effect runs only once
```

In this example, the event listener is cleaned up when the component unmounts.

## Common Patterns

### Fetching Data

```javascript
import React, { useState, useEffect } from "react";

function DataFetchingComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []); // Empty array ensures this runs only once

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default DataFetchingComponent;
```

### Subscribing to External Data Sources

```javascript
import React, { useState, useEffect } from "react";

function SubscriptionComponent() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const subscription = someAPI.subscribe((newValue) => {
      setValue(newValue);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []); // Empty array ensures this runs only once

  return <div>{value}</div>;
}

export default SubscriptionComponent;
```

---

For more information, refer to the [official React documentation](https://reactjs.org/docs/hooks-effect.html).
