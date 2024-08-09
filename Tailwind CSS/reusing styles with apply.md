# Reusing Styles with @apply in Tailwind CSS

## Introduction

Tailwind CSS provides the `@apply` directive, which allows you to compose complex utilities in your CSS. This is useful for reusing styles across different components without repeating the same class names.

## Theory

### What is @apply?

The `@apply` directive is a feature in Tailwind CSS that lets you use utility classes within your custom CSS. It helps to keep your HTML clean and makes it easier to manage complex styles.

### How to Use @apply

To use `@apply`, you need to create a CSS file (e.g., `styles.css`) and import it into your project. Then, you can use the `@apply` directive to apply Tailwind utility classes.

```css
/* styles.css */
.btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
}

.btn:hover {
  @apply bg-blue-700;
}
```

## Examples

### Basic Example

Creating a reusable button style using `@apply`.

```html
<!-- HTML -->
<button class="btn">Button</button>

/* styles.css */ .btn { @apply px-4 py-2 bg-blue-500 text-white rounded; }
.btn:hover { @apply bg-blue-700; }
```

### Advanced Example

Creating a card component with reusable styles.

```html
<!-- HTML -->
<div class="card">
  <h2 class="card-title">Card Title</h2>
  <p class="card-body">This is some card content.</p>
</div>

/* styles.css */ .card { @apply p-6 max-w-sm mx-auto bg-white rounded-xl
shadow-md space-y-4; } .card-title { @apply text-xl font-medium text-black; }
.card-body { @apply text-gray-500; }
```

### Responsive Styles

Applying responsive styles with `@apply`.

```html
<!-- HTML -->
<button class="btn-responsive">Responsive Button</button>

/* styles.css */ .btn-responsive { @apply px-4 py-2 bg-blue-500 text-white
rounded; @screen sm { @apply bg-green-500; } @screen md { @apply bg-red-500; }
@screen lg { @apply bg-purple-500; } }
```

## Common Patterns

### Utility-First Workflow

Using `@apply` to create utility-first workflow components.

```html
<!-- HTML -->
<div class="alert alert-warning">
  <p>Warning: This is an alert message.</p>
</div>

/* styles.css */ .alert { @apply p-4 border rounded; } .alert-warning { @apply
bg-yellow-100 border-yellow-500 text-yellow-700; } .alert-error { @apply
bg-red-100 border-red-500 text-red-700; } .alert-success { @apply bg-green-100
border-green-500 text-green-700; }
```

### Combining Tailwind with Custom CSS

Using `@apply` to combine Tailwind utilities with custom CSS.

```html
<!-- HTML -->
<button class="custom-btn">Custom Button</button>

/* styles.css */ .custom-btn { @apply px-4 py-2 bg-blue-500 text-white rounded;
border: 2px solid #fff; transition: all 0.3s ease-in-out; } .custom-btn:hover {
@apply bg-blue-700; border-color: #f00; }
```

## Conclusion

The `@apply` directive in Tailwind CSS is a powerful tool for reusing styles and keeping your HTML clean. It allows you to combine the utility-first approach of Tailwind with the flexibility of custom CSS. Refer to the official [Tailwind CSS documentation](https://tailwindcss.com/docs/functions-and-directives#apply) for more detailed information and advanced usage.

## References

- [Tailwind CSS Documentation](https://tailwindcss.com/docs/functions-and-directives#apply)
- [CSS Tricks: Tailwind CSS @apply](https://css-tricks.com/)
