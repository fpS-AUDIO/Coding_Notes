# SCSS Build process

---

## Final package.json:

```json

// inside package.json file:

// {...
  "scripts": {
    /////////////////////////////////
    // DEVELOPNG SASS/CSS WORKFLOW //
    /////////////////////////////////

    //  ----- SASS developing step -----
    // includes watch part (-w)
    "watch:sass": "node-sass src/sass/main.scss src/css/style.css -w",

    //  ----- RUN live-server -----
    // just calls the live-server (needs npm package)
    "devserver": "live-server",

    //  ----- FIANL SASS/CSS DEVELOPNG step  -----
    //  ----- Includes running live-server and watching and compiling sass  -----
    // "--parallel" argument makes them run in parallel
    "start": "npm-run-all --parallel devserver watch:sass",

    ////////////////////////////////
    // BUILDING SASS/CSS WORKFLOW //
    ////////////////////////////////

    //  ----- SASS compiling step -----
    // without watch part and create the new compiled file (style.comp.css)
    "compile:sass": "node-sass src/sass/main.scss src/css/style.comp.css",

    //  ----- CSS concatenation step -----
    // -o is output [path/file] -> then all input files [path/file1] [path/file2] [path/file3]
    "concat:css": "concat -o src/css/style.concat.css src/css/icon-font.css src/css/style.comp.css",

    //  ----- CSS prefixing step -----
    // using "postcss" with "autoprefixer" plugin
    // -b is browsers to specify browsers to be targeted
    // 'last 10 versions' to use last 10 versions of browsert to really add all prefixes
    // src/css/style.concat.css is input file
    // -o src/css/style.prefix.css is output file
    "prefix:css": "postcss --use autoprefixer 'last 10 versions' src/css/style.concat.css -o src/css/style.prefix.css",

    //  ----- CSS compress step -----
    // using "node-sass" package then [INPUT file] then [OUTPUT file]
    // "--output-style compressed" option make only compress without compiling
    "compress:css": "node-sass src/css/style.prefix.css src/css/style.css --output-style compressed",

    //  ----- FIANL SASS/CSS BUILD step  -----
    //  ----- Includes compiling, concatenating, prefixing and compressing steps  -----
    // using "npm-run-all" pakcage then put names of need tasks
    "build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"
  },
// ...}

```

---

### compiling

After compiling the .scss files into CSS using the **npm script** specified in the package.json file

```cmd
npm install node-sass --save-dev
```

```json
// {...
  "scripts": {
    "compile:sass": "node-sass src/sass/main.scss src/css/styles.css -w"
  },
// ...}
```

---

### concatenation

The next step is **concatenation**:
This involves merging the content of the generated CSS file with other CSS and icon-font files, allowing you to reduce the number of CSS files included in your page from two to one, which improves performance.

To do this you can use an npm package.
Documentation: https://www.npmjs.com/package/concat
Installation:

```cmd
npm install concat --save-dev
```

---

### prefixing

Then, you should add vendor **prefixes** to the code for better cross-browser compatibility.

First you need to install the prefixer package:

```cmd
npm install autoprefixer --save-dev
```

And to make the prefixer package work you need to install postcss-cli.
You need this because the autoprefixer is actually part of this postcss package.

```cmd
npm install postcss-cli --save-dev
```

---

### compressing

Lastly step is to **compress** the entire code you have at this stage.
This step doesn't need a new npm package because the already installed node-sass can do it.

---

### final building

You can create a script which runs all previus build scripts at once.
So it includes compiling, concatenating, prefixing and compressing steps.

To make it work on all platforms (Mac, Windows and Linux) you should use an npm package called npm-run-all.
Installation:

```cmd
npm install npm-run-all --save-dev
```
