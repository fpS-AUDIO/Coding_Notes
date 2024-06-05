# `useEffect` Hook in React

The `useEffect` hook is a fundamental part of the React Hooks API, allowing you to perform side effects in function components.
**NOTE**: effect runs only after browser painting.

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

The dependency array allows you to control when the effect runs. The effect will only run if one of the dependencies has changed. The useEffect hook is about synchronization and about the component life cycle.

**NOTE**: every state variable and prop used inside the effect MUST be included in the dependency array. Also specify at least an empty array to run it once, never leave empty hole as the second argument, overwise it will run on every rerender, because effect will be synchronized with everything.

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

---

# Cleanup

Effects can optionally return a cleanup function. React will run the cleanup function when the component unmounts or before running the effect again (if dependencies have changed). You should always return clean up functions during the fetching to stop it and avoid different problems like **race condtion**.

Thanks to **closures** the returner function still have access to all the variables of the useEffect hook.

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

### Aborting Fetch Request with Clean Up function

```jsx
// using useEffect hook
useEffect(
  function () {
    // AbortController browser API
    const controller = new AbortController();

    // the useEffect callback is synchronous to prevent race conditions, so it can not return a promise
    // for this reason passing new asynch function inside fetchMovies()
    // wrap asynch func inside try catch block to get errors
    async function fetchMovies() {
      try {
        // loading state is ON
        setIsLoading(true);

        // Resetting error
        setErrorMessage("");

        // try to fetch data
        // as second argument of fetch func passing the object with singal property connected to the controller (AbortController)
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY_API}&s=${query}`,
          { signal: controller.signal }
        );

        // guard clause (for fetching)
        if (!response.ok)
          throw new Error("Something went wrong wuth fetching movies...");

        // if response is ok convert from json
        const data = await response.json();

        // guard clause (if there is no movie from query)
        if (data.Response === "False") {
          throw new Error("Movie not found...");
        }

        // if everything is ok update movies state
        setMovies(data.Search);

        // also resetting error
        setErrorMessage("");
      } catch (err) {
        // setting error function only if error is different of AbortError caused when aborting the fetch in cleanup func
        if (err.name !== "AbortError") {
          setErrorMessage(() => err.message);
        }
      } finally {
        // loading state is OFF
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setErrorMessage("");
      return;
    }
    // indeed also call the asynch function
    fetchMovies();

    // returning the clean up function
    return function () {
      // aborting the fetch request inside the useEffect cleanup function using the AbortController
      // Remember: when the request is canceled JS sees it like an error, so adjusted try catch blocks
      controller.abort();
    };
  },
  // arrau with a list of dependencies which, when change, will run the effect
  // NOTE: every state variable and prop used inside the effect MUST be included in the dependency array
  [query]
);
```

### Removing event listener in clean up function

```jsx
// ... inside the component scope, so the code is executed each time component runs
useEffect(() => {
  // using hook to be able to use vanilla JS

  // declaring the callbakc function
  const callbackEsc = function (event) {
    // check if the pressed key is `Esc`
    if (event.code === `Escape`) {
      // console.log(`escaping`);
      // this functions closes component
      onCloseMovie();
    }
  };

  // attaching event listener
  document.addEventListener(`keydown`, callbackEsc);

  // returning a cleanup function to remove event listener,
  // overwise a new one will be attached everytime the component code runs
  return function () {
    document.removeEventListener(`keydown`, callbackEsc);
  };

  // adding the outside function as dependency
}, [onCloseMovie]);
```

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
