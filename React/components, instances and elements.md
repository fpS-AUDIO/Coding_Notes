# Components vs Instances vs Elements

### Components

**Component** is a JS function used to describe a piece of UI. This function returns a React element, usually written in JSX syntax. It's a function used (called) to produce component instances of an application.
_example_: button component is used to produce different button of an app.

### Instances

**Instances** are created when you use a component. Each instance has its own state and life cycle. The JSX is converted behind the scenes into multiple `React.createElement` function calls and when React executes the code of each instance each of them returns React Element.

### Elements

React **element** is result of using the component represented by a big JS object which Reacts keeps in memory. This object contains info used to create DOM Elements. So React elements are not DOM elements.
