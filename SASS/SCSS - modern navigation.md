# SCSS - Modern Navigation

### html:

```html
<div class="navigation">
  <input type="checkbox" class="navigation__checkbox" id="navi_toggle" />
  <label for="navi_toggle" class="navigation__label">
    <span class="navigation__icon">&nbsp;</span>
  </label>
  <!-- &nbsp is empty space -->
  <div class="navigation__background">&nbsp;</div>

  <nav class="navigation__nav">
    <ul class="navigation__list">
      <li class="navigation__item">
        <a href="#" class="navigation__link">Home Page</a>
      </li>
      <li class="navigation__item">
        <a href="#" class="navigation__link">Features</a>
      </li>
      <li class="navigation__item">
        <a href="#" class="navigation__link">Prices</a>
      </li>
      <li class="navigation__item">
        <a href="#" class="navigation__link">Community</a>
      </li>
      <li class="navigation__item">
        <a href="#" class="navigation__link">Work with Us</a>
      </li>
    </ul>
  </nav>
</div>
```

### scss:

```SCSS
.navigation {
  &__checkbox {
    display: none;
  }

  &__label {
    // need to cover &__background, so should be bigger
    height: 7rem;
    width: 7rem;
    border-radius: 50%;

    // should be positioned to cover &__background (so in center of that)
    position: fixed;
    top: 9.5rem;
    right: 9.5rem;

    // z-index should be heigher then &__background
    z-index: 2000;

    // other styling
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 1rem 3rem rgba(#181818, 0.1);

    // text-align is to center ICON (code below)
    text-align: center;
  }

  &__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 10rem;
    right: 10rem;
    background-image: radial-gradient(
      circle,
      rgba(9, 9, 121, 1) 50%,
      rgba(21, 12, 171, 1) 74%
    );

    // z-index should be lower then &__label
    z-index: 1900;

    // when navigation open the BG will be scaled
    // SEE OPEN STATE BELOW
    // transform: scale(80);

    transition: all 0.5s cubic-bezier(0.83, 0, 0.17, 1);
  }

  &__nav {
    // should occopy all the viewport
    height: 100vh;
    // width: 100vw;
    position: fixed;
    top: 0;
    right: 0;

    // z-index should be between the &__label and &__label
    z-index: 1950;

    // initially hide it
    // SEE OPEN STATE BELOW
    opacity: 0;
    width: 100;
    -webkit-pointer-event: none; /* make it unaccessible to mouse and keyboard */
    visibility: hidden; /* hide from screen readers */

    transition: all 0.5s ease;
  }

  &__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
  }

  &__item {
    margin: 2.4rem;
  }

  &__link {
    &:link,
    &:visited {
      // display: inline-block to make apply paddings etc
      display: inline-block;
      font-size: 3rem;
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      padding: 1.2rem 2.4rem;

      // to make hover effect works
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #fff 50%
      );
      // increse the BG-size to hide partially hide the background-image (linear-gradient)
      // since it's 120deg you shoould pur a bit more then 200% here:
      background-size: 225%;

      transition: all 0.3s ease;
    }

    &:hover,
    &:active {
      // in hover move the background-image (linear-gradient) to make visible over side
      background-position: 100%;
      // color to make it visible on the background
      color: #181818;
      // additional effect
      transform: translateX(1rem);
    }
  }

  // ----- STYLES FOR ICON ----- //

  &__icon {
    position: relative;

    // margin-top to center pseudoelements
    margin-top: 3.3rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 0.4rem;
      background-color: #181818;
      display: inline-block;
      border-radius: 8px;
      transition: all 0.2s;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }

  // ----- STYLES FOR ICON:HOVER ----- //

  &__label:hover &__icon::before {
    top: -1rem;
  }
  &__label:hover &__icon::after {
    top: 1rem;
  }

  // ----- STYLES FOR OPEN STATE ----- //

  &__checkbox:checked ~ &__background {
    transform: scale(80);
  }
  &__checkbox:checked ~ &__nav {
    opacity: 1;
    width: 100vw;
    -webkit-pointer-event: auto;
    visibility: visible;
  }

  &__checkbox:checked ~ &__label &__icon {
    // don't chage size because the pseudoelements depends on its size, so change only bg color
    background-color: transparent;
  }
  &__checkbox:checked ~ &__label &__icon::before {
    transform: rotate(45deg);
    // move to middle
    top: 0;
    transform-origin: center;
  }
  &__checkbox:checked ~ &__label &__icon::after {
    transform: rotate(-45deg);
    // move to middle
    top: 0;
    transform-origin: center;
  }
}


```
