# CSS Modules

---

### Options of how React App can be styled

1.  **Inline CSS**:
    - written inside JSX elements
    - used through style prop
    - JSX element scoped (local)
    - based on css
2.  **CSS or SASS file**:
    - written inside an external file
    - used through className prop
    - entire app scoped (global)
    - based on css
3.  **CSS Modules**:
    - one external file per each component
    - used through className prop
    - component scoped
    - based on css
4.  **CSS-in-JS Library like 'Styled Components'**:
    - one external file or component file
    - creates new component
    - component scoped
    - based on JavaScript
5.  **Utility-first CSS framework like 'tailwindcss'**:
    - written in JSX elements
    - used through className prop
    - JSX element scoped
    - based on CSS
6.  **Use component library**:
    - like: _MUI_, _Chakra UI_, _Mantine_

---

### CSS Modules Fundamentals

CSS modules comes out of the box with `create-react-app` and `Vite`.

You need to create 1 external file per component. Conventionally the file has the same name of a component, but it should finish with `.module.css`. For example if you have a file component called `PageNotFound.js` the css module should be called `PageNotFound.module.css`.

Inside the css module use **class names** and not element selectors. So use `.nav` and not simply `ul`. When the css file is ready you should import it inside the component file like `import styles from './PageNotFound.module.css'`. Once the css module is imported inside the component JS/JSX file, you can use it like this:

```jsx
// inside the PageNotFound.jsx file

import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return <div className={styles.wrapper}>Page not found 404...</div>;
}
```

In the final result, the defined class names in css modules, will change their name by attaching some random id in the end. For example `wrapper` can become `_wrapper_hhfdw_2`. This help to prevent conflicts, so if you use the same class name in another component with differed style rules, they don't conflict with each other in the final result.

If you need to style some classes that are provided from external sources you can use `:global(.classNameSelector)` function. This function make that class global (accesible from whole app) without attaching some random id in the end. For example React Router's NavLink element provides .active class and if you want to style it differently you can do this:

```css
.nav :global(.active) {
  opacity: 1;
}
```

If you need some global css, for example, to make some style resets, you can include a normal css file (not module css) in `main.jsx` file. Example:

```jsx
// inside main.jsx file

import "index.css";
```
