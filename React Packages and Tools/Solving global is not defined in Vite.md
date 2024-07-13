
# Solving `global is not defined` in Vite

When using Node.js libraries in a browser environment with Vite, you might encounter the error `global is not defined`. This guide provides steps to resolve this issue.

## Problem

Node.js libraries expect a `global` object to be available. However, in browser environments, the `global` object does not exist, causing errors like:

```
Uncaught ReferenceError: global is not defined
```

## Solution

### Step 1: Modify Vite Configuration

Update your `vite.config.js` to define the `global` variable. This ensures `global` is available in the browser environment.

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Shim the global variable for browser compatibility
  define: {
    'process.env': {},
    global: {},
  },
});
```

### Step 2: Restart Your Development Server

After updating the `vite.config.js`, restart your Vite development server. Stop the server if it's running and then start it again with:

```bash
npm run dev
```

### Step 3: Verify Your Import Statement

Ensure that you are importing and using the library correctly in your component. Here's an example with the `convert-units` library:

```javascript
import React, { useState } from 'react';
import convert from 'convert-units';

const UnitConverter = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('oz');
  const [toUnit, setToUnit] = useState('cup');
  const [result, setResult] = useState(null);

  const handleConversion = () => {
    const convertedValue = convert(Number(value)).from(fromUnit).to(toUnit);
    setResult(convertedValue);
  };

  return (
    <div>
      <h1>Unit Converter</h1>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value"
        />
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="oz">Ounces (oz)</option>
          <option value="cup">Cups (cup)</option>
          <option value="g">Grams (g)</option>
          <option value="lb">Pounds (lb)</option>
          <option value="kg">Kilograms (kg)</option>
          {/* Add more units as needed */}
        </select>
        <span> to </span>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="oz">Ounces (oz)</option>
          <option value="cup">Cups (cup)</option>
          <option value="g">Grams (g)</option>
          <option value="lb">Pounds (lb)</option>
          <option value="kg">Kilograms (kg)</option>
          {/* Add more units as needed */}
        </select>
        <button onClick={handleConversion}>Convert</button>
      </div>
      {result !== null && (
        <div>
          <h2>Result</h2>
          <p>{`\${value} \${fromUnit} = \${result} \${toUnit}`}</p>
        </div>
      )}
    </div>
  );
};

export default UnitConverter;
```

## Summary

1. **Update `vite.config.js`** to define `global`.
2. **Restart your development server**.
3. **Ensure correct usage and import of the library** in your component.

By following these steps, you can resolve the `global is not defined` issue and use Node.js libraries in your Vite-powered React application without problems.
