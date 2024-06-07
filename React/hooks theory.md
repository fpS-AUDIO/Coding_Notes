# Hooks theory

**React hooks** are special functions which allow us to "hook" into React internal mechanisms, so it's like public API exposed to some internal React functionality like:

- creating and accessing state from Fiber tree
- registring side effects in Fiber tree
- make manual DOM selections
- etc...

React Hooks always star with word `use` to make them easy to destinguish from other functions. We also can create **custom hooks** which will also start with the word `use`.
Before React v.16.8 developers had to use _components based on JS classes_ to give the state to components and access their lifecycle, but then hook were introduced.

Some of hoos in React:

- `useState`
- `useEffect`
- `useReducer`
- `useContext`
- `useRef`
- `useCallback`
- `useMemo`
- `useTransition`
- `useDeferredValue`
- `useLayoutEffect`
- `useDebugValue`
- `useImperativeHandle`
- `useId`
- `useSyncExternalStore`
- `useInsertionEffect`

The 2 important **rules** of hooks (also enforced by plugin _ESLint_):

1.  Call hooks only on top level (not inside conditions, loops, nested functions or after early return) to bo sure they're called always in the same order, so don't brake the links of linked lists.
2.  Call hooks only from react functions (from components or custom hooks)
