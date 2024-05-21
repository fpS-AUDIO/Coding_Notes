# SCSS - shape-outside property

Use this property to make text wrap around and element.
This property should be used with:

- float property
- defined dimensions
- clip-path to make it also visible like shape-outside

### html:

```html
<div class="wrapper">
  <figure class="wrapper__shape"></figure>
  <div class="wrapper__text">
    <h3>Hello world!</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi blanditiis
      reprehenderit animi beatae labore distinctio nam corrupti, quae minus esse
      quia error impedit, harum ipsum? Ab et temporibus harum quos. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Modi impedit facere quia
      facilis? Maxime, dignissimos tenetur deserunt laboriosam, fugiat nulla rem
      in at, corrupti quasi unde numquam ullam illum! Consequuntur.
    </p>
  </div>
</div>
```

### scss:

```scss
.wrapper {
  // just basic container styling
  margin: 0 auto;
  padding: 15rem 5rem;
  border-radius: 0.2rem;
  background-color: lightblue;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.2);

  &__shape {
    background-color: saddlebrown;

    // element should have dimensions to make shape-outside work
    width: 10rem;
    height: 10rem;

    // element should be floated to make it work
    float: left;

    // to make text wrapping around an element, for example a circle
    // define a vectorized shape with polygon, circle etc..
    // shape-outside: circle(radius, at X Y);
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);

    // now to make it visible like an actual circle
    // use clip-path and make it exact same circle
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);

    // to create some gap from text it's better toi use transform, not margins etc..
    transform: translate(-2rem, 0);
  }
}
```
