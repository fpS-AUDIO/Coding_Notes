# Controlled Elements in React

**Controlled Elements** is a technique which allows to controls the state of the input fields from react and no longer from the DOM elements. It's because by default the input (or like select) element maintains its own state inside the DOM, but you shold keep the state inside application and not inside the DOM.

To implement this you need 3 steps:

1. **create a piece of state**

```javascript
import { useState } from "react";
const [description, setDescription] = useState("");
```

2. **set value attribute**

```javascript
// make react control this element
<input value={description} type="text" placeholder="item..."></input>
```

3. **connect state and value**

```javascript
// listen onChange event
// passing the value from event of target by accessing the event
<input
  onChange={(e) => setDescription(e.target.value)}
  value={description}
  type="text"
  placeholder="item..."
></input>
```

---

**Full example**:

```javascript
function Form() {
  // state
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    // usual preventing default behavior like in vanilla JS
    e.preventDefault();

    // guard clause
    if (!description) return;

    // creating new item object
    const item = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    // restauring to initial state
    setDescription("");
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={(e) => setQuantity(+e.target.value)} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((el) => {
          return (
            <option key={el} value={el}>
              {el}
            </option>
          );
        })}
      </select>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="item"
      ></input>
      <button>ADD</button>
    </form>
  );
}
```
