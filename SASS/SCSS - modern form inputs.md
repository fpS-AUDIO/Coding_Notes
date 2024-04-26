# SCSS - Modern form inputs

### html:

```html
<div class="wrapper__book">
  <div class="book">
    <div class="book__form">
      <form action="#" class="form">
        <div class="margin-botton-normal">
          <h2 class="title title--terciary">Book now!</h2>
        </div>
        <div class="form__group">
          <input
            type="text"
            class="form__input"
            placeholder="Full Name"
            id="name"
            required
          />
          <label for="name" class="form__label">Full Name</label>
        </div>
        <div class="form__group">
          <input
            type="email"
            class="form__input"
            placeholder="Email"
            id="email"
            required
          />
          <label for="email" class="form__label">Email</label>
        </div>

        <div class="form__group">
          <div class="form__radio-group">
            <input
              type="radio"
              name="sameRadioGroup"
              id="radioInp"
              class="form__radio-input"
            />
            <label for="radioInp" class="form__radio-label">
              <span class="form__radio-btn"></span>
              radio one</label
            >
          </div>
          <div class="form__radio-group">
            <input
              type="radio"
              name="sameRadioGroup"
              id="radioInp2"
              class="form__radio-input"
            />
            <label for="radioInp2" class="form__radio-label">
              <span class="form__radio-btn"></span>
              radio two</label
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
```

### scss:

```SCSS

.wrapper__book {
  position: relative;
  z-index: 1;
  margin: 0 auto;
  padding: 6rem;

  // to make cool effect finish the first on 50% and start 50% on second color,
  // also can select the image behind them and make the colors transparent
  background-image: linear-gradient(
    125deg,
    rgb(203, 200, 255) 50%,
    rgba(9, 9, 121, 1) 50%
  );
}

.form {
  // 50% width of the parent element
  width: 50%;

  &__group:not(:last-child) {
    margin-bottom: 2.4rem;
  }

  &__input {
    // some basic styling
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
    border-radius: 0.3rem;
    background-color: rgba(#fff, 0.9);
    outline: none;
    border: none;
    display: block;
    width: 90%;
    margin: 1rem;

    // by default the font-family is not inherited in inputs
    font-family: inherit;

    // add invisible border from begining to don't make it jump in focus state
    border-bottom: 0.2rem solid transparent;

    transition: all 0.3s ease;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(#181818, 0.3);
      border-bottom: 0.4rem solid blueviolet;
    }

    // styling focus invalit
    &:focus:invalid {
      border-bottom: 0.4rem solid orangered;
    }

    // styling placeholder
    &::-webkit-input-placeholder {
      color: lightslategray;
    }
  }

  &__label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 3rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s ease;
  }

  // when placeholder in shown styling the label
  &__input:placeholder-shown ~ &__label {
    // opacity can be animated
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }

  // ----- INPUT RADIO:

  &__radio-group {
    // to place side by side since they are 2
    display: inline-block;
    width: 40%;
  }
  &__radio-input {
    display: none;
  }

  &__radio-label {
    cursor: pointer;
    font-size: 2rem;
    position: relative;

    // padding-left to make it stay away from &__radio-btn
    padding-left: 4.5rem;
  }

  &__radio-btn {
    // creating cutom circle
    display: inline-block;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: 0.4rem solid blueviolet;

    // top to align it
    position: absolute;
    left: 0;
    top: 0;

    &::after {
      content: "";
      display: inline-block;
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: blueviolet;
      transition: all 0.3s ease;

      // opacity 0 to make it invisible when not selected
      opacity: 0;
    }
  }
  &__radio-input:checked ~ &__radio-label &__radio-btn::after {
    opacity: 1;
  }
}


```
