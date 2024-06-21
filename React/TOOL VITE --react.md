# Vite for React: A Quick Guide

---

## 1. Introduction to Vite

Vite is a modern build tool that provides a fast development environment for front-end projects. It leverages native ES modules and offers a high-performance dev server, making it a great choice for modern web development.

Key features include:

- Instant server start
- Lightning-fast hot module replacement (HMR)
- Optimized production build

---

## 2. Installation

To get started with Vite, you'll need Node.js and npm installed on your machine.

```bash
# Install Vite globally
npm install -g create-vite
```

---

## 3. Creating a New React Project with Vite

Vite makes it easy to bootstrap a new React project.

```bash
# Create a new Vite project
npm create vite@latest my-react-app

# Navigate to the project directory
cd my-react-app

# Install dependencies
npm install
```

This will create a new React project with Vite pre-configured.

### 3.1 Configurint ESLint dev tool for the React Vite **v.4** Project

- First you need to install 3 npm packages and save them as dev dependencies
  `npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev`
- create a new file in root directory called `.eslintrc.json` to configure the eslint behavioir (need to extend default rules to installed react rules)
- inside the `.eslintrc.json` file:

  ```json
  {
    "extends": "react-app"
  }
  ```

  **Note**: or add this to `.eslintrc.cjs` in `extends` field.

- configure Vite project with this `.eslintrc.json` file, so enter inside the `vite.config.js` file and inside the plugins array add eslint, something like this:

  ```javascript
  import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";
  import eslint from "vite-plugin-eslint";

  export default defineConfig({
    plugins: [react(), eslint()],
  });
  ```

### 3.2 Steps to Bypass Prop Validation Error in ESLint

Inside the `.eslintrc.cjs` disable prop validation inside the `rules` field:

```cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "react-app",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off", // Disable prop-types validation
  },
};
```

---

## 4. Project Structure

A typical Vite React project structure looks like this:

```

my-react-app
├── node_modules
├── public
│ └── index.html
├── src
│ ├── App.jsx
│ ├── main.jsx
│ └── styles.css
├── .gitignore
├── index.html
├── package.json
└── vite.config.js

```

- **public**: Static assets like images and the main `index.html` file.
- **src**: Source code for your React application.
- **vite.config.js**: Configuration file for Vite.

---

## 5. Running the Development Server

Start the development server using:

```bash
npm run dev
```

This will launch your React app on `http://localhost:5173`. The port might vary based on your configuration.

---

## 6. Building for Production

To build your project for production, run:

```bash
npm run build
```

This will create an optimized `dist` folder that you can deploy to your server.

---

## 7. Configuration Options

Vite is highly configurable via the `vite.config.js` file. Here's a basic example:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
  },
});
```

- **plugins**: Allows adding plugins for additional functionality.
- **server**: Configuration for the development server.
- **build**: Options for the build process.

---

## 8. Adding Plugins

Vite has a rich plugin ecosystem. For example, to add TypeScript support:

```bash
# Install TypeScript
npm install --save-dev typescript @types/react @types/react-dom

# Create a tsconfig.json
npx tsc --init
```

Then, update your `vite.config.js` to include the TypeScript plugin if needed.

---

## 9. Common Issues and Troubleshooting

### Hot Module Replacement (HMR) Issues

If HMR isn't working, try:

- Ensuring your components are properly exporting.
- Restarting the development server.

### Build Failures

If the build process fails:

- Check the error logs for missing dependencies or syntax errors.
- Verify the configuration in `vite.config.js`.

For more troubleshooting tips, visit the [Vite documentation](https://vitejs.dev/guide/).

---

## 10. Additional Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
