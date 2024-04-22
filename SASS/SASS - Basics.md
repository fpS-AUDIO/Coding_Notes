# SASS BASICS

SASS (Syntactically Awesome Style Sheets) is a CSS preprocessor, an extension of CSS that enhances the basic language by adding power and elegance, allowing for more dynamic and maintainable stylesheets.

## Compiled Nature of SASS

Websites do not directly interpret SASS code as it must first be compiled into standard CSS. This process ensures that styles written in SASS are fully compatible with all browsers.

## Main Features of SASS

### Variables

- **Purpose**: Store reusable values such as colors, font sizes, and more.
- **Example**:
  ```scss
  $primary-color: #333;
  body {
    color: $primary-color;
  }
  ```

### Nesting

- **Purpose**: Nest selectors within one another to organize CSS and reduce repetition.
- **Example**:
  ```scss
  .navbar {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li {
      display: inline-block;
    }
    a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }
  }
  ```

### Operators

- **Purpose**: Perform mathematical operations directly within CSS.
- **Example**:
  ```scss
  .container {
    width: 100%;
    padding: 10px * 2;
  }
  ```

### Partials and Imports

- **Purpose**: Break down CSS into smaller, reusable files and combine them using `@import`.
- **Example**:

  ```scss
  // _reset.scss
  @import "reset";

  body {
    margin: 0;
    padding: 0;
  }
  ```

### Mixins

- **Purpose**: Define reusable pieces of CSS code.
- **Example**:

  ```scss
  @mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    @include flex-center;
  }
  ```

### Functions

- **Purpose**: Define reusable functions that return a value.
- **Example**:

  ```scss
  @function divide($value, $divisor) {
    @return $value / $divisor;
  }

  .element {
    width: divide(100%, 3);
  }
  ```

### Extends

- **Purpose**: Share a set of CSS properties from one selector to another.
- **Example**:

  ```scss
  %message-shared {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
  }

  .success {
    @extend %message-shared;
    background-color: #dff0d8;
  }
  .error {
    @extend %message-shared;
    background-color: #f2dede;
  }
  ```

### Control Directives

- **Purpose**: Write complex code using conditionals and loops.
- **Example**:
  ```scss
  @for $i from 1 through 3 {
    .item-#{$i} {
      width: 20% * $i;
    }
  }
  ```

## SASS Syntaxes

- **SASS**: Uses indentation for structure, avoiding the use of curly braces and semicolons.
- **SCSS**: Keeps the look of traditional CSS but leverages the power of SASS.

## Install SCSS Locally

1. You need to install node.js and test if it's installed with command:

```cmd
node -v
```

2. Create package.json file in the root directory of the project if don't have one already:

```cmd
npm init
```

3.  Install SASS compiler as developer dependencie.
    Dev dependencie means that node-sass is a tool is a tool hat we use to develop our project.

```cmd
npm install node-sass --save-dev
```

4.

- To compile scss you can add a command inside the package.json file
  node-sass [inputFile] [outputFile] and the [outputFile] will be overwritten
  Indeed the "src/sass/main.scss" is just the path to file
  add "-w" in the end to keep watching changes

```json
"scripts": {
  "compile:sass": "node-sass src/sass/main.scss src/style.css -w"
}
```

- then in the command line you can run the command:

```cmd
npm run compile:sass
```

5.  P.S.
    To reinstall all packages selected in package.json file:

```cmd
npm install
```
