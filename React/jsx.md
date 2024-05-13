# JSX

### What is JSX

JSX is a **declarative** syntax used to describe what components look like and how they work. So each component should return one block of jsx which React will render on UI.

JSX is an extention of JavaScript that allows to embed JS, CSS and React Components into HTML. `Babel` (tool) automatically included inside the project by `create-react-app`, converts jsx to `React.createElement` function call.

### imperative vs declarative

**imperative**: approach used in vanilla javascript to build a UI. So you need to manually select elements, traverse DOM, attach event handlers, give step-by-step instructions on how to mutate elements etc. In other words, in imperative approach you need to declare how to achive a result.

**declarative**: approach used to describe how UI should look like basing on the current data (state and props). So you don't need any DOM manipulation, selecting elements etc. In other words, in declarative approach you need to declare what result you need.
