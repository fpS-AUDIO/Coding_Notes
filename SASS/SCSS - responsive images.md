# Responsive Images in HTML and SCSS

In this documentation, we will cover techniques for implementing responsive images in HTML and SCSS, including:

1. **Density Switching**: Using the `<img>` element's `srcset` attribute to provide different image resolutions for different screen densities.
2. **Resolution Switching**: Decreasing image resolution on smaller screens.
3. **Art Direction**: Displaying different images based on screen size.

---

## Density Switching

### HTML Implementation

To implement density switching, you can use the `srcset` attribute of the `<img>` tag to provide different image resolutions based on screen density:

```html
<img src="img1.png" srcset="img1.png 1x, img2.png 2x" alt="Image description" />
```

In this example:

- `img1.png` is used for standard resolution (1x screens).
- `img2.png` is used for high resolution (2x screens).

### SCSS Implementation

You can also use SCSS media queries to customize the styles based on screen density:

```scss
.img-container {
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url("img2.png");
  }
}
```

---

## Resolution Switching

### HTML Implementation

For resolution switching, you can use the `sizes` and `srcset` attributes to provide different image resolutions based on the viewport width:

```html
<img
  src="img_small.png"
  srcset="img_small.png 400w, img_large.png 800w"
  sizes="(max-width: 600px) 400px, 800px"
  alt="Image description"
/>
```

In this example:

- `sizes` defines how much space the image should take up based on screen width.
- The browser chooses an image from `srcset` that best matches the width specified by `sizes`.

### SCSS Implementation

SCSS can be used to adjust styles based on viewport width:

```scss
.img-container {
  width: 100%;

  @media (max-width: 600px) {
    background-image: url("img_small.png");
  }
}
```

---

## Art Direction

### HTML Implementation

For art direction, you can use the `<picture>` element to define different images based on screen width:

```html
<picture>
  <source media="(max-width: 600px)" srcset="img_small.png" />
  <source media="(min-width: 601px)" srcset="img_large.png" />
  <img src="img_fallback.png" alt="Image description" />
</picture>
```

In this example:

- The browser selects the appropriate image based on the specified media queries.

### SCSS Implementation

You can also use SCSS media queries for finer control:

```scss
.img-container {
  @media (max-width: 600px) {
    background-image: url("img_small.png");
  }
  @media (min-width: 601px) {
    background-image: url("img_large.png");
  }
}
```
