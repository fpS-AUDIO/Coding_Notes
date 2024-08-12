# Styled Components VS Code Extension - Quick Reference Guide

## Table of Contents

1. [Introduction to the Styled Components VS Code Extension](#introduction-to-the-styled-components-vs-code-extension)
2. [Installation](#installation)
3. [Basic Features](#basic-features)
4. [Syntax Highlighting](#syntax-highlighting)
5. [Autocomplete and IntelliSense](#autocomplete-and-intellisense)
6. [Linting and Error Detection](#linting-and-error-detection)
7. [Common Settings and Customization](#common-settings-and-customization)
8. [Useful Tips and Best Practices](#useful-tips-and-best-practices)
9. [Troubleshooting](#troubleshooting)
10. [Conclusion](#conclusion)

## Introduction to the Styled Components VS Code Extension

The Styled Components extension for Visual Studio Code enhances the development experience for those who use the Styled Components library in React. This extension provides several features such as syntax highlighting, IntelliSense, and linting, making it easier to write and maintain styled components in your React projects.

## Installation

To install the Styled Components extension in Visual Studio Code:

1. Open VS Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. Search for "vscode-styled-components".
4. Click on "Install" for the extension created by **Julien Poissonnier**.

Alternatively, you can install it via the command line:

```bash
code --install-extension jpoissonnier.vscode-styled-components
```

## Basic Features

The Styled Components VS Code extension comes with several key features:

1. **Syntax Highlighting**: Provides proper syntax highlighting for styled components in JavaScript and TypeScript files.
2. **Autocomplete and IntelliSense**: Offers code completion suggestions and parameter hints when writing styled components.
3. **Linting and Error Detection**: Works with ESLint to detect errors in styled components code.
4. **Go to Definition**: Allows you to quickly navigate to the definition of your styled components.

## Syntax Highlighting

Syntax highlighting is one of the most crucial features provided by the Styled Components extension. It enhances the readability of your code by highlighting styled component blocks within your JavaScript/TypeScript files.

### Example:

```javascript
import styled from "styled-components";

const Button = styled.button`
  background-color: palevioletred;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #d45d79;
  }
`;
```

### Explanation:

- The extension correctly highlights CSS inside the template literal strings.
- It differentiates between properties, values, and pseudo-selectors, making your code easier to scan and debug.

## Autocomplete and IntelliSense

The extension also provides autocomplete suggestions and IntelliSense features when you're writing styled components. This makes it easier to write CSS-in-JS by suggesting property names, values, and even relevant snippets.

### Example:

As you start typing:

```javascript
const Container = styled.div`
  display: ;
`;
```

VS Code will suggest `flex`, `block`, `grid`, etc., as valid CSS display values.

### Benefits:

- Reduces the need to memorize exact CSS property names and values.
- Helps avoid typos and syntax errors by suggesting correct options as you type.

## Linting and Error Detection

Linting is essential for maintaining code quality. The Styled Components extension works with ESLint to identify errors within your styled components.

### Example:

If you have an invalid CSS property or value:

```javascript
const InvalidButton = styled.button`
  bakground-color: palevioletred; // Note the typo here
`;
```

### Explanation:

- The extension will underline the invalid property (`bakground-color`) and display an error message.
- This helps you quickly catch mistakes and maintain high-quality, error-free styles.

## Common Settings and Customization

The Styled Components extension is highly customizable. Here are some common settings you might want to adjust:

### 1. Custom Syntax Highlighting Colors

You can customize the colors used for syntax highlighting in your user settings (`settings.json`).

```json
"editor.tokenColorCustomizations": {
"textMateRules": [
{
"scope": "source.css.styled",
"settings": {
"foreground": "#FF6347" // Sets the color for styled components
}
}
]
}
```

### 2. Working with ESLint

Ensure that your ESLint configuration is set up to work well with Styled Components. Here's an example of a relevant `.eslintrc.json` configuration:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:styled-components-a11y/recommended"
  ],
  "plugins": ["styled-components-a11y"]
}
```

### 3. Disabling Certain Features

If you find that you don't need certain features (like syntax highlighting), you can disable them in the extension settings.

## Useful Tips and Best Practices

- **Organize Your Styled Components**: Consider placing your styled components in separate files or grouping them logically within your code to enhance readability and maintainability.
- **Naming Conventions**: Use clear and descriptive names for your styled components. For example, instead of naming a button `StyledButton`, use `PrimaryButton` or `SubmitButton` to describe its purpose.
- **Utilize Theming**: Make use of `ThemeProvider` to maintain consistent styling across your application. The extension supports IntelliSense for theme properties, which can speed up development.

## Troubleshooting

### Common Issues:

1. **Syntax Highlighting Not Working**:

   - Ensure the file is saved with a `.js`, `.jsx`, `.ts`, or `.tsx` extension.
   - Make sure the extension is correctly installed and enabled.

2. **Autocomplete Not Working**:

   - Check your VS Code settings to ensure that IntelliSense is enabled.
   - Restart VS Code if the problem persists.

3. **Linting Issues**:
   - Ensure your ESLint configuration is correctly set up to work with Styled Components.
   - Install relevant ESLint plugins, such as `eslint-plugin-styled-components-a11y`.
