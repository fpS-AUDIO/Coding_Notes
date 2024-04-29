# SCSS `@supports` Feature

In this documentation, we'll explore the `@supports` feature in SCSS, which allows for conditional styling based on the browser's support for specific CSS properties.

## What is `@supports`?

The `@supports` at-rule is used to check if the browser supports specific CSS properties or features, and then conditionally apply styles based on the result. This is particularly useful for progressive enhancement, ensuring that modern styling features are only applied when supported.

### Example: Checking Support for `backdrop-filter`

The following example demonstrates how to use the `@supports` feature to check for support for `backdrop-filter`:

```scss
@supports (
  (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
) {
  .blur-effect {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
}
```

In this example:

- The `@supports` feature checks if the browser supports either the `-webkit-backdrop-filter` or `backdrop-filter` properties.
- If supported, it applies these properties to the `.blur-effect` class, creating a blurred background effect.

## Using `@supports` Effectively

To use `@supports` effectively:

1. **Progressive Enhancement**: Ensure that essential styles are provided for all browsers, and use `@supports` for modern enhancements.
2. **Browser Testing**: Test how your page renders across different browsers to ensure consistent appearance and functionality.
3. **Fallback Styles**: Provide fallback styles for browsers that do not support the feature being checked.
