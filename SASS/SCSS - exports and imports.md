# SCSS - exports and imports

### partial

The file which will be importend in the main SCSS file should be partial.
All partial SCSS files names starts with an underscore: ( \_ )

### import

Inside the main.scss file:

```SCSS
// @import [path to file]
// P.S. don't need to use the _ in file name (original name was "_base.scss")
@import "./base.scss"
```
