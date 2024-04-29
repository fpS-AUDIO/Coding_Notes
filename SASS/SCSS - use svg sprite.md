# SCSS - use svg sprite

Nowadays the best way to add svg icon is to simply use file containing all icons. In this way client will download only 1 file. Usually this file's called _sprite.svg_.

Including the svg icon in the following way it's a really best choice, it allows to easly change color of icon.
**Note**: _xlink:hreft_ work only on a web server.

#### html:

```html
<form action="#" class="search">
  <!-- other tags -->
  <button class="search__button">
    <svg class="search__icon">
      <!-- to include SVG sprite file with reference to each icon -->
      <!-- <use xlink:hreft="path/file.svg#idIcon"></use> -->
      <use xlink:hreft="./src/img/sprite.svg#icon-home"></use>
    </svg>
  </button>
</form>
```

#### scss:

```scss
.search {
  &__button {
  }
  &__icon {
    // easy to style it
    height: 2rem;
    width: 2rem;
  }
}
```
