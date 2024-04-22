
# SCSS - Mixins, Extends and Functions

## Mixins

Mixins in SCSS allow you to create reusable styles that can be included in other selectors. They function similarly to functions in programming, allowing for less repetition and more dynamic stylesheets.

### Examples of Mixins

**Basic Mixin:**
```scss
// Declaration of a mixin:
@mixin clearFix {
    &::after {
        content: "";
        clear: both;
        display: table;
    }
}

// Using the mixin:
.nav {
    margin: 30px;
    background-color: $bg-color;
    @include clearFix;
}
```

**Mixin with Arguments:**
```scss
// Passing arguments into a mixin:
@mixin styleLinkText($color) {
    text-decoration: none;
    text-transform: uppercase;
    color: $color;
}

.link {
    @include styleLinkText($color-text-dark);
}
```

## Functions

SCSS functions can be used to calculate values or manage colors dynamically, making styling more adaptable and maintainable.

### Built-in Functions
```scss
.btn1 {
    &:hover {
        // Darken the color by a specified percentage:
        background-color: darken($color-primary, 25%);
    }
}

.btn2 {
    &:hover {
        // Lighten the color by a specified percentage:
        background-color: lighten($color-primary, 20%);
    }
}
```

### Custom Functions
```scss
// Example of a custom function in SCSS:
@function sumNumbers($a, $b) {
    @return $a + $b;
}

// Using a custom function:
.div {
    width: sumNumbers(20, 10) * 1px; // Corrected syntax: Added comma and clarified expression
}
```

## Extends

Extends in SCSS are used to share a set of CSS properties from one selector to another without duplication, using placeholders.

### Example of Extends
```scss
// Define placeholder with %:
%btn-placeholder {
    padding: 10px;
    display: inline-block;
    text-align: center;
    border-radius: 8px;
}

// Extend the placeholder in a selector:
.btn {
    &:link {
        @extend %btn-placeholder;
    }
}
```
