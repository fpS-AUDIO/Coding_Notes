
# JS npm

## Basics

- **npm** (Node Package Manager) is both a software installed on your computer and a package repository.

- To check if npm is installed, verify its version:
  ```bash
  npm -v
  ```
  If not installed, install Node.js.

- To use npm in a project, you must initialize it by navigating to the project directory and running:
  ```bash
  npm init
  ```
  After answering some questions, a `package.json` file will be created, which stores the entire configuration of the project.

- When you install a package (e.g., `npm install leaflet`), the `package.json` file is updated to include a `dependencies` field listing all dependencies and their versions.

- A `node_modules` folder is also created in the project directory, containing all library folders. If moving the project to another computer or sharing it on Git, never include the `node_modules` folder, as all these files are available from npm. Thanks to the `package.json` file, you can install all dependencies automatically:
  ```bash
  npm install
  ```

- To use most modules effectively, a module bundler is recommended, as many use the CommonJS module system. However, ES modules like `lodash-es` can be used directly without a CommonJS system, allowing for a default import without any external module system.

- When installing a development dependency, use `--save-dev`:
  ```bash
  npm i parcel --save-dev
  ```
  Development dependencies are tools needed to build your application but aren't included in your code. They appear in a `devDependencies` field in `package.json`.

- To install packages globally, add the `-g` flag:
  ```bash
  npm i -g <package_name>
  ```

