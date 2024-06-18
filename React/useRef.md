# useRef

---

### What is a ref?

**Ref** stands for reference and the `useRef` hook is used to create a ref. Ref is like a **box** which can be used to store any data which will be **preserved during the rerenders**. In practice, when you use `useRef` hook React gives you an object with a **mutable** `.current` property, then you can write/read any data inside that property.

The `useRef` is useful to:

1.  create a variable which stays the same during the rerenders (setTimeout id, previous state etc.)
2.  select and store DOM elements

Usually `useRef` is used for data which is **NOT rendered to UI** but appear in some internal logic like event handlers, effects (so usually not in JSX). Also you can **not** read or write `.current` property in render logic like state.

The main **differences** between state and ref:

- **updating refs don't cause the re-renders** like when you mutate the state which will cause a re-render
- **ref is mutable** and the state is not
- **refs updates are synchronous** and the updates of state are asynchronous

---

### Select DOM element using `useRef`

3 steps to select a DOM element using `useRef`:

1.  import `useRef` and create a ref inside a component
2.  inside returned jsx of that component pass the created ref as prop called `ref`
3.  use ref

```jsx
import { useEffect, useRef, useState } from "react";

function Search({ query, setQuery }) {
  // 1. creating a ref and passing 'null' as initial value
  // (usually 'null' when working with DOM elements)
  const searchInputEl = useRef(null);

  // 3. using ref
  useEffect(function () {
    // searchInputEl.current = is the DOM element
    // calling focus() method on DOM element to automatically focus it on 1st render
    searchInputEl.current.focus();
  }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      // 2. use 'ref' prop to connect a ref in a declarative way
      ref={searchInputEl}
    />
  );
}
```
