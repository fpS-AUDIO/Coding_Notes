# SCSS - Background video

### html:

```html
<div class="wrapper">
  <div class="bg-video">
    <video class="bg-video__content" autoplay mute loop>
      <!-- options for video -->
      <source src="./src/videos/video-1.mp4" type="video/mp4" />
      <source src="./src/videos/video-1.webm" type="video/webm" />
      <!-- callback text in case of not compatibility -->
      Your browser doesn't support video
    </video>
  </div>
</div>
```

### scss:

```SCSS
// IMPLEMENTING BACKGROUND VIDEO

.wrapper {
  position: relative;
  z-index: 1;

  // just basic container styling
  margin: 0 auto;
  width: 50rem;
  height: 25rem;
}

.bg-video {
  // for container of the video
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;

  // opacity to make video barely visible
  opacity: 0.15;

  // in case video overflows
  overflow: hidden;

  // selecting actual video element
  &__content {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}


```
