# JavaScript Parcel Build process

Сontent:

- install parcel
- use parcel
- build the final compressed bundle
- activate hot module
- example of a package.json file

---

### install parcel

The webpack is the most popular bundler (especially in React development), but it requires a lot of configuration. **Parcel** is a build tool on npm and it works out of the box, so without any configuration.

To use Parcel you need to install it as devDependency:

```cmd
npm install --save-dev parcel
```

When you run parcel you don't need to specify _type="module"_ inside the _script_ tag in HTML for a better older browser compatibility.
While passing entry point parcel will bundle all modules together and starts a new development server.
It also creates a _dist_ (distribution) directory which is a production folder.

In all module bundlers you don't need to specify the whole path while including a JS module.
It works with all kind of assets like html, css, imgs, modules, commonJS modules etc...

```javascript
// for example you can simply write to import the cloneDeep function from lodash-es:
import cloneDeep from "lodash-es/cloneDeep.js";
// avoid using a direct file path like
import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
```

---

### how to use parcel

There are 2 main option how to use parcel in console:

1.  use npx (application built into a NPM)
    passing entry point (index.html) to parcel where the script tags are included

    ```cmd

    npx parcel index.html
    ```

2.  use npm scripts (scripts inside package.json file)

    ```json
    // inside package.json file:
    // {...
    "scripts": {
        "start": "parcel index.html",
    },
    // ...}
    ```

    Then just run in console (inside the directory) the npm script.
    For example:

    ```cmd
    npm run start
    ```

---

### build the final compressed bundle

NPM script to build the final compressed bundle.
This script compresses the script making it more performant:

```json
// inside package.json file:
// {...
"scripts": {
    "build": "parcel build index.html --dist-dir ./dist",
},
// ...}
```

Parcel automatically uses Babel to transpile the code, but Babel can only transpile ES6 Syntax so the real new features (e.g. Promise) can not be transpiled.

To solve this you can polyfill them using two packages:

- core-js (for polyfilling)

  ```cmd
  npm install core-js
  ```

- regenerator-runtime (for polyfilling async functions)
  ```cmd
  npm install regenerator-runtime
  ```

To use the these packages you need to import them inside the main script:

```javascript
// import these for polyfilling
import "core-js/stable";
import "regenerator-runtime/runtime";
```

**NOTE:**

To _transpile_ code means to transform source code written in one programming language or version of a language into another language or version that has a similar level of abstraction.

A _polyfill_ is a shim or fallback implementation of a feature that mimics a future API, providing backward compatibility for older browsers that do not support that feature natively. _core-js_ basically implements the new ES6 method inside the Prototype object.

---

### activate hot module

Inside the javascript file (script) you can activate "hot module replacement".
It means whenever you change one of the modules, it'll trigger a rebuild,
but without triggering a whole page reload.
Below there is code to activate this mode, this code will not be included in distribution because it understands only parcel.

```javascript
// activate hot module replacement
if (module.hot) {
  module.hot.accept();
}
```

---

### example of a package.json file

```json
{
  "name": "eaterymeter",
  "version": "1.0.0",
  "description": "EateryMeter: A comprehensive nutrition and lifestyle app for food enthusiasts.",
  "default": "index.html",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html --dist-dir ./dist"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/fpS-AUDIO/EateryMeter.git"
  },
  "keywords": [
    "nutrition",
    "food",
    "calories",
    "allergens",
    "BMI",
    "wine",
    "health",
    "diet",
    "EateryMeter"
  ],
  "author": "Alexander Ivanov",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/fpS-AUDIO/EateryMeter/issues"
  },
  "homepage": "https://github.com/fpS-AUDIO/EateryMeter#readme",
  "devDependencies": {
    "parcel": "^2.12.0"
  },
  "dependencies": {
    "core-js": "^3.36.0",
    "quagga": "^0.12.1",
    "regenerator-runtime": "^0.14.1"
  }
}
```
