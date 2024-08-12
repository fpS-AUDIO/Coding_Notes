# Styled Components with React - Quick Reference Guide

## Table of Contents

1. [Introduction to Styled Components](#introduction-to-styled-components)
2. [Installation](#installation)
3. [Basic Usage](#basic-usage)
4. [Props and Dynamic Styles](#props-and-dynamic-styles)
5. [Extending Styles](#extending-styles)
6. [Theming with `ThemeProvider`](#theming-with-themeprovider)
7. [Global Styles](#global-styles)
8. [Keyframes and Animations](#keyframes-and-animations)
9. [Advanced Patterns](#advanced-patterns)
10. [Common Pitfalls](#common-pitfalls)
11. [Conclusion](#conclusion)

## Introduction to Styled Components

Styled Components is a library for React and React Native that allows you to use component-level styles in your application. It is a popular choice for handling CSS in JavaScript by allowing you to write actual CSS code to style your components.

## Installation

To install Styled Components, run the following command in your React project:

```bash
npm install --save styled-components
```

Or if you're using Yarn:

```bash
yarn add styled-components
```

## Basic Usage

Styled Components utilizes tagged template literals to style your components. Here’s a basic example:

```javascript
import styled from "styled-components";

const Button = styled.button`
  background-color: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const App = () => <Button>Click Me</Button>;

export default App;
```

### Explanation:

- The `Button` component is a styled `<button>` element.
- The styles are written just like regular CSS, but within a JavaScript template literal.
- Styled Components generates unique class names for your styles, so they don't conflict with other styles.

## Props and Dynamic Styles

You can pass props to your styled components to dynamically change styles based on the component's props.

```javascript
const Button = styled.button`
  background-color: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
`;

const App = () => (
  <>
    <Button primary>Primary Button</Button>
    <Button>Secondary Button</Button>
  </>
);

export default App;
```

### Explanation:

- The `primary` prop determines the background and text color of the `Button`.
- Styled Components allow conditional logic inside template literals to create dynamic styles.

## Extending Styles

You can create new components that inherit the styles of existing ones using the `.extend` syntax.

```javascript
const TomatoButton = styled(Button)`
  background-color: tomato;
  border-color: tomato;
`;

const App = () => <TomatoButton>Tomato Button</TomatoButton>;

export default App;
```

### Explanation:

- `TomatoButton` inherits all the styles from `Button`, but with modified `background-color` and `border-color`.

## Theming with `ThemeProvider`

Styled Components provides a way to define and use themes in your application using `ThemeProvider`.

```javascript
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "palevioletred",
  secondaryColor: "tomato",
};

const Button = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Button>Themed Button</Button>
  </ThemeProvider>
);

export default App;
```

### Explanation:

- The `ThemeProvider` component makes the `theme` object available to all styled components in the app.
- Styled components can then access the theme values via the `props.theme` object.

## Global Styles

Sometimes you need to apply global styles across your application. Styled Components provides the `createGlobalStyle` helper for this purpose.

```javascript
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
margin: 0;
padding: 0;
font-family: 'Open Sans', sans-serif;
}
`;

const App = () => (
  <>
    <GlobalStyle />
    <Button>Styled Button</Button>
  </>
);

export default App;
```

### Explanation:

- `GlobalStyle` defines styles that apply globally (e.g., resetting margins, setting a font family).
- It’s rendered once at the top level of your app and affects all components.

## Keyframes and Animations

Styled Components allows you to define animations with keyframes, which can then be used in your components.

```javascript
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
`;

const RotateButton = styled.button`
  animation: ${rotate} 2s linear infinite;
`;

const App = () => <RotateButton>Rotating Button</RotateButton>;

export default App;
```

### Explanation:

- The `rotate` keyframes define a rotation animation.
- `RotateButton` applies this animation to the `<button>` element, making it rotate continuously.

## Advanced Patterns

### Using As Prop for Polymorphism

You can use the `as` prop to change the rendered element without losing the styles.

```javascript
const Button = styled.button`
/_ styles _/
`;

const LinkButton = () => (
  <Button as="a" href="https://example.com">
    Link Button
  </Button>
);

export default LinkButton;
```

```jsx
import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
`;

export default Heading;
```

### Media Queries

Styled Components makes it easy to apply media queries in your styles.

```javascript
const ResponsiveDiv = styled.div`
  width: 100%;
  color: palevioletred;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const App = () => <ResponsiveDiv>Responsive Div</ResponsiveDiv>;

export default App;
```

### Nesting

Styled Components supports nesting of selectors, similar to SCSS.

```javascript
const Container = styled.div`
  padding: 1em;
  background: papayawhip;

  &:hover {
    background: palevioletred;

    & > p {
      color: white;
    }
  }
`;

const App = () => (
  <Container>
    <p>Hover over this container</p>
  </Container>
);

export default App;
```

## Common Pitfalls

- **Overusing Inline Styles**: Although Styled Components allow for dynamic inline styles, overusing them can lead to poor readability and maintainability.
- **Performance Considerations**: Be mindful of creating many styled components in large applications as it might impact performance.
- **Specificity Issues**: Remember that Styled Components do not automatically handle CSS specificity, so carefully structure your styles to avoid conflicts.

## Conclusion

Styled Components are a powerful tool for managing styles in React applications, providing both flexibility and modularity. By understanding the basics, dynamic styling, theming, and advanced patterns, you can efficiently style your applications while keeping your code maintainable.

Happy coding!
