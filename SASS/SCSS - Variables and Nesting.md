# SCSS - Variables and Nesting

## Variables

In SASS, variables allow you to store reusable values such as colors, font sizes, and more. This makes your code more maintainable and your styles consistent across your project.

### Example of Variables

```scss
$color-primary: #181818;
$color-bg: #fff;

.nav {
  background-color: $color-bg;
  color: $color-primary;
}
```

## Nesting

SASS allows you to nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. This feature helps in writing clearer and more concise code.

### Example of Nesting

```scss
.nav {
  background-color: $color-bg;
  color: $color-primary;

  .link {
    display: inline-block;
    margin-right: 10px;

    // Correct use of the parent selector (&) with pseudo-classes
    &:last-child {
      margin-right: 0;

      a {
        text-decoration: none; // Corrected typo from 'text-decoratrion' to 'text-decoration'
      }
    }
  }
}
```

### Notes on Nesting and Pseudoclasses

- **Parent Selector (&)**: The ampersand (&) is used to reference the parent selector in the nested structure, which is very useful with pseudoclasses.
- **Pseudoclasses**: Using `&` effectively ensures that pseudoclasses are appended directly to the selector without any intervening spaces, which might affect the intended styling.
