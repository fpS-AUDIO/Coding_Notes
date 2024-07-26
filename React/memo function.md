# React.memo() Documentation

## Introduction

`React.memo()` is a higher order component that optimizes the performance of functional components in React by memoizing the rendered output. It prevents unnecessary re-renders by comparing the previous and next set of props, rendering the component only if the props have changed.

`React.memo()` is a powerful optimization tool in React for preventing unnecessary renders and enhancing performance. However, it should be used carefully, keeping in mind the nature of the component and the frequency of prop changes.

**When to Use `memo()`**:

- When a component renders the same output given the same props.
- To prevent unnecessary re-renders and improve performance, especially in large lists or complex UI.

## Syntax

### Basic Usage

```javascript
const MemoizedComponent = React.memo(Component);
```

### With Props Comparison

```javascript
const MemoizedComponent = React.memo(Component, (prevProps, nextProps) => {
  // Return true if nextProps is equal to prevProps to prevent re-render
});
```

## Example Usage

### Simple Example

```javascript
import React from "react";

const MyComponent = ({ count }) => {
  console.log("Rendering MyComponent");
  return <div>{count}</div>;
};

export default React.memo(MyComponent);
```

_Explanation_: In this example, `MyComponent` will only re-render if the `count` prop changes.

### Comparison with Non-memoized Component

```javascript
import React from 'react';

const RegularComponent = ({ count }) => {
  console.log('Rendering RegularComponent');
  return <div>{count}</div>;
};

const MemoizedComponent = React.memo(({ count }) => {
  console.log('Rendering MemoizedComponent');
  return <div>{count}</div>;
});

// Usage
<RegularComponent count={5} />
<MemoizedComponent count={5} />
```

_Explanation_: The `RegularComponent` will re-render on every parent re-render, while the `MemoizedComponent` will only re-render if the `count` prop changes.

## Common Patterns

### Using memo() with props comparison

```javascript
const MemoizedComponent = React.memo(Component, (prevProps, nextProps) => {
  return prevProps.someValue === nextProps.someValue;
});
```

_Explanation_: This custom comparison function only allows re-rendering if `someValue` changes.

### Memoization with useCallback and useMemo

```javascript
const MyComponent = ({ onClick }) => {
  const handleClick = React.useCallback(() => {
    // handler logic
  }, []);

  const computedValue = React.useMemo(() => {
    // expensive computation
    return someValue;
  }, [someDependency]);

  return <div onClick={handleClick}>{computedValue}</div>;
};
```

_Explanation_: `useCallback` memoizes the `handleClick` function, and `useMemo` memoizes the result of an expensive computation.

## Caveats and Considerations

- `React.memo()` does a shallow comparison of props by default. Deep comparisons can lead to performance issues.
- It is most effective for components that are re-rendered frequently with the same props.
- Overuse of `React.memo()` can complicate your component tree and should be used judiciously.

**Best Practices**:

- Use `React.memo()` for components that render the same output for the same props.
- Combine with `useCallback` and `useMemo` for optimal performance.
- Avoid deep prop comparisons in the custom comparison function to prevent performance bottlenecks.
