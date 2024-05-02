# SCSS - mask image

With `-webkit-mask-image` css property you can easly change the background color of an svg using only css/sass (no html), e.g. as in pseudo element

#### scss:

```scss
item::before {
  content: "";
  display: inline-block;
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;

  // older browser version
  // it's okey, but you can't change the color of the SVG (e.g. icon)
  // background-image: url(../img/img--1.svg);
  // background-size: cover;

  // basically you need to set the background color/image
  // then like clip it, so BG color will be seen only where the mask allows it
  // always use @supports with this
  background-color: blue;
  -webkit-mask-image: url(../img/img--1.svg);
  -webkit-mask-size: cover;
  mask-image: url(../img/img--1.svg);
  mask-size: cover;
}
```
