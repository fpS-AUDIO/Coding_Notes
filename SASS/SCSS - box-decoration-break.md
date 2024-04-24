# SCSS - Box-decoration-break property

### html:

```html
<div class="wrapper">
  <h2 class="heading">
    <span class="heading__span"
      >Hello world! <br />
      It's an amazing text</span
    >
  </h2>
</div>
```

### scss:

```scss
.wrapper {
  // just basic container styling
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .heading {
    font-size: 4rem;
    color: #fff;
    text-align: right;
    display: inline-block;
    transform: skew(-10deg);

    &__span {
      padding: 1rem 3rem;
      background-image: linear-gradient(
        90deg,
        rgba(2, 0, 36, 0.85) 0%,
        rgba(9, 9, 121, 0.85) 20%
      );
      // this property apply all the declarations to all boxes created by an element
      // this works when box occupies multiple lines
      // for example to make same padding in all lines and not just in one
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
    }
  }
}
```
