# SCSS - Rotating Cards

### html:

```html
<div class="card-wrapper">
  <div class="rotatingCard">
    <div class="rotatingCard__side rotatingCard__side--front">FRONT</div>
    <div class="rotatingCard__side rotatingCard__side--back">BACK</div>
  </div>
</div>
```

### scss:

```scss
.card-wrapper {
  // just basic container styling
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .rotatingCard {
    // the perspective on the parent element ("-moz-" to make it work also in mozilla)
    perspective: 100rem;
    -moz-perspective: 100rem;

    // position relative to the parent to make them stack on each other
    position: relative;
    height: 50rem;
    width: 30rem;

    &__side {
      //   position absolute to make them stack on each other
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      // Hide the back of flipped elements
      backface-visibility: hidden;

      transition: all 0.5s ease;

      // some basic common styling
      border-radius: 8px;
      box-shadow: $default-boxshadow;

      &--front {
        // some basic custom styling
        background: rgb(27, 92, 41);
        background-image: linear-gradient(
          150deg,
          rgba(27, 92, 41, 1) 50%,
          rgba(64, 192, 87, 1) 100%
        );
      }

      &--back {
        // already rotated during the initial state of back side
        transform: rotateY(180deg);

        // some basic custom styling
        background: rgb(193, 159, 68);
        background-image: linear-gradient(
          150deg,
          rgba(193, 159, 68, 1) 19%,
          rgba(240, 171, 99, 1) 100%
        );
      }
    }

    &:hover .rotatingCard__side--front {
      transform: rotateY(-180deg);
    }

    &:hover .rotatingCard__side--back {
      transform: rotateY(0);
    }
  }
}
```
