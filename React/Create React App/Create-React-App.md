
### Set up project with Create-React-App

**Create-React-App** is a command-line interface tool. In the terminal, navigate to the directory and use the command (`create-react-app@5` to use version 5 of the tool):

```cmd
npx create-react-app Your-App-Name
```

The create-react-app will download and create some files inside the project directory. It seems like a regular npm project created by the `npm init` command which includes the standard files like `package.json` and the `node_modules` directory.

The main folder for development is `src`. The `public` folder contains all the assets that will end up in the final application like images, favicon, index.html file.

### How to render the root component

Assuming the `src` folder is empty, you need to create the child file there:

```cmd
index.js
```

It should be called exactly `index.js` because the webpack module bundler expects the entry point to be called like this.

**Example of index.js**:

```javascript
// Importing actual React
import React from "react";
import ReactDOM from "react-dom/client";

// Called App for convention
function App() {
  return <h1>Hello React!</h1>;
}

/* ----- React version before 18: render the component
import ReactDOM from "react-dom";
ReactDOM.render(<App />, document.getElementById("root"));
*/

// React V18: render the component to the DOM
// Selecting the element where the application will be rendered (inside that element)
const rootEl = document.getElementById("root");
// Creating the root by using the `createRoot` element of the React library
const root = ReactDOM.createRoot(rootEl);
// Rendering the actual component
root.render(<App />);

/* ----- Strict mode:
    Strict mode, during development, will render all components twice to help find bugs,
    and also React will check if you're using outdated parts of the React API.
    It's always a good idea to use it during development:

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
```
