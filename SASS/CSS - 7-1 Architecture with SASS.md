# 7-1 CSS Architecture with Sass

The 7-1 architecture pattern divides the project's Sass files into seven folders, plus a single file at the root level (usually named `main.scss`) that imports all other files to be compiled into a CSS stylesheet.

## Directory Structure

- **sass/**
  - **abstracts/** (or sometimes **utilities/**)
    - `_variables.scss`: Contains all global SASS variables.
    - `_functions.scss`: Defines Sass functions for reuse throughout the project.
    - `_mixins.scss`: Stores mixins for common patterns.
  - **base/**
    - `_base.scss`: Sets up project-wide base styles.
    - `_animations.scss`: Contains keyframes and other animations.
    - `_typography.scss`: Contains typography rules.
    - `_utilities.scss`
  - **components/**
    - Various SCSS files for different components (e.g., `_button.scss`, `_dropdown.scss`, etc.).
  - **layout/**
    - SCSS files that handle styling for different major parts of the site (e.g., `_header.scss`, `_footer.scss`, `_grid.scss`).
  - **pages**
    - Style definitions specific to different pages (e.g., `_home.scss`, `_contact.scss`).
  - **themes/**
    - Styling for different themes, if applicable.
  - **vendors/**
    - CSS files from external libraries and frameworks.

## Main SCSS File

```scss
// main.scss
// Entry point file that imports all other files.
@import "abstracts/variables";
@import "abstracts/functions";
@import "abstracts/mixins";
@import "base/base";
@import "base/animations";
// Import additional files as necessary
```

This architecture helps in maintaining a large codebase by segregating styles into manageable, predictable chunks. Each folder or file has a specific purpose, making the code easier to manage and update as the project evolves.
