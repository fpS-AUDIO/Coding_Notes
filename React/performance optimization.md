# Performance Optimization

You should check the speed and the reason of rendering in _profiler_ tab of `react development tools` browser plugin. The 3 reasong why component can be rerendered are: state changes, context changes and parent rerenders. There are 3 main ares which can be improved when you try to optimize the a React application:

1. prevent wasted renders
2. improve app speed/responsiveness
3. reduce bundle size

---

### prevent wasted renders

**memoization**: optimization technique that executes a pure function once, and saves the result in memory (cache). If you try to execute the function again with the _same arguments_ as before, the previously saved result will be returned, _without executing the function again_.

You can improvethe wasted renders by using:

- **passing elements as children or regular prop**: If a component is passed as a `children` prop to another component, even if the second parent component is rerender it doesn't affect the children prop component. This happens bacause the children component is created before the the parent and then simply passed in as a prop. This is really helpful when you need to continisly rerender the parent component, and the children is a slow component which doesn't change.
- **memo** can be used to create a component that will not rerender when its parent rerenders, as long as the props stay the same between renders. This only affects props, so a memoized component still rerenders when its own state changes or when a context that it's subscribed to changes. Memo should be used for heavy components which are rerendered often with same props.
- **useMemo** used to memoize objects between rerenders.
- **useCallback** used to memoize functions between rerenders.
- **useMemo** and **useCallback** accepts values which will be stored in memory (cached) and returned in subsequent rerenders, as long as dependencies ("inputs") stay the same. So these 2 hooks also have a dependency array like useEffect() hook and when the value in dependency array is changed, the value will be recreated.

--- 

### improve app speed/responsiveness

You can improve this by using

- useMemo
- useCallback
- useTransition
  ***

### reduce bundle size

You can improve this by using

- using fewer 3rd party packages
- code splitting in lazy loading
