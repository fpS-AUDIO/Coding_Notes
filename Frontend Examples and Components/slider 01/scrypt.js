"use strict";

//////////////////////
// Slider Component //
//////////////////////

// everything is in the separe function to not pollute the global namespace
const slider = function () {
  // --- slider elements ---
  const slider = document.querySelector(`.slider`);
  const slides = document.querySelectorAll(`.slide`);
  const slideRightBtn = document.querySelector(`.slider__btn--right`);
  const slideLeftBtn = document.querySelector(`.slider__btn--left`);
  const sliderDotsContainer = document.querySelector(`.dots`);

  // --- variables for slider ---
  let currentSlide = 0;
  const slidesNumber = slides.length;

  // --- functions for slider ---
  const goToSlide = function (slide) {
    slides.forEach((sld, indx) => {
      sld.style.transform = `translateX(${100 * (indx - slide)}%)`;
    });
  };

  const goToNextSlide = function () {
    if (currentSlide === slidesNumber - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateSliderDot(currentSlide);
  };
  const goToPreviousSlide = function () {
    if (currentSlide === 0) {
      currentSlide = slidesNumber - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateSliderDot(currentSlide);
  };

  const createDots = function () {
    // looping over the slide to create the same number of dots
    slides.forEach(function (_, indx) {
      // insert actual html inside the container with data-slide=index
      sliderDotsContainer.insertAdjacentHTML(
        `beforeend`,
        `<button class="dots__dot" data-slide="${indx}"></button>`
      );
    });
  };

  const activateSliderDot = function (slide) {
    // selecting all existing slider dots and remove active class from all of them
    document.querySelectorAll(`.dots__dot`).forEach((dot) => {
      dot.classList.remove(`dots__dot--active`);
    });

    // select the dot basing of the given data-attribute and add the active class to this dot
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add(`dots__dot--active`);
  };

  const init = function () {
    // initial view of slides
    goToSlide(currentSlide);
    createDots();
    activateSliderDot(0);
  };

  init();

  // --- event handlers ---
  slideRightBtn.addEventListener(`click`, goToNextSlide);
  slideLeftBtn.addEventListener(`click`, goToPreviousSlide);

  document.addEventListener(`keydown`, function (e) {
    if (e.key === `ArrowRight`) goToNextSlide();
    if (e.key === `ArrowLeft`) goToPreviousSlide();
    // e.key === `ArrowLeft` && goToPreviousSlide();
  });

  // using event delegation
  sliderDotsContainer.addEventListener(`click`, function (e) {
    if (!e.target.classList.contains(`dots__dot`)) return;
    // get data-slide of target element
    const slideNumber = e.target.dataset.slide;
    // got to that data-slide number
    goToSlide(slideNumber);
    activateSliderDot(slideNumber);
  });
};

slider();
