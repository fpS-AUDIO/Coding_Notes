# SCSS Columns and Hyphenation Properties

CSS columns are useful for creating multi-column layouts for text, making it easier to manage and visually more appealing. The hyphenation properties help in controlling how words break at the end of lines.

## Column Properties

### `column-count`

The `column-count` property specifies the number of columns in a multi-column layout.

**Syntax:**

```scss
column-count: number | auto;
```

**Values:**

- `number`: The specific number of columns.
- `auto`: The browser calculates the number of columns.

**Example:**

```scss
.example {
  column-count: 3;
}
```

### `column-gap`

The `column-gap` property specifies the gap between columns in a multi-column layout.

**Syntax:**

```scss
column-gap: length | normal;
```

**Values:**

- `length`: Specifies the gap size (e.g., `20px`, `1em`).
- `normal`: Browser's default gap size.

**Example:**

```scss
.example {
  column-gap: 20px;
}
```

### `column-rule`

The `column-rule` property sets a rule (line) between columns in a multi-column layout, similar to a border.

**Syntax:**

```scss
column-rule: column-rule-width column-rule-style column-rule-color;
```

**Values:**

- `column-rule-width`: Specifies the thickness of the rule (`medium`, `thin`, `thick`, or specific size like `1px`).
- `column-rule-style`: Style of the rule (`none`, `solid`, `dotted`, `dashed`, etc.).
- `column-rule-color`: Color of the rule.

**Example:**

```scss
.example {
  column-rule: 2px solid black;
}
```

## Browser-Specific Prefixes

### `-moz-column-count`, `-moz-column-gap`, `-moz-column-rule`

These are Mozilla Firefox-specific prefixes for `column-count`, `column-gap`, and `column-rule` respectively.

### `-moz-hyphens`, `-ms-hyphens`, `-webkit-hyphens`

These prefixes are used to specify how words should be hyphenated in different browsers (Mozilla, Microsoft, and WebKit-based browsers).

## Hyphenation Properties

### `hyphens`

The `hyphens` property controls how words are hyphenated when text wraps across multiple lines.

**Syntax:**

```scss
hyphens: none | manual | auto;
```

**Values:**

- `none`: No hyphenation.
- `manual`: Hyphenates at hyphen characters in the text.
- `auto`: Browser automatically hyphenates at appropriate hyphenation points.

**Example:**

```scss
.example {
  hyphens: auto;
}
```

## Additional Properties

### `column-width`

Specifies the optimal width of the columns.

**Syntax:**

```scss
column-width: auto | length;
```

**Values:**

- `auto`: The browser calculates the column width.
- `length`: Specifies the width of the columns.

**Example:**

```scss
.example {
  column-width: 200px;
}
```

### `column-span`

Allows an element to span across multiple columns.

**Syntax:**

```scss
column-span: none | all;
```

**Values:**

- `none`: The element does not span across columns.
- `all`: The element spans across all columns within the block.

**Example:**

```scss
.example {
  column-span: all;
}
```

These properties provide a robust framework for designing multi-column layouts and controlling text hyphenation in web design.
