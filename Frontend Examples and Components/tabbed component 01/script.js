"use strict";

/////////////////////////////////
// Building a tabbed component //
/////////////////////////////////

// selecting elements to work with tabs
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsBtns = document.querySelectorAll(`.operations__tab`);
const tabsContents = document.querySelectorAll(`.operations__content`);

// using event delegation, so add event listener on container
tabsContainer.addEventListener(`click`, function (event) {
  // preventing default just to be sure (not really necessary)
  event.preventDefault();

  // get the element (during bubbling) which provocated event --> event.target
  // and find the actual button because there is the <span> inside --> .closest(`.operations__tab`);
  const clickedBtn = event.target.closest(`.operations__tab`);

  // if `clickedBtn` is null so there was a click on container and not button then just exit function
  if (!clickedBtn) return;

  // otherwise get the `data-tab` attribute to understand which content should be shown
  const numberContent = clickedBtn.dataset.tab;

  // remove active class from all tab buttons
  // and add active class only on clicked tab button
  tabsBtns.forEach((el) => el.classList.remove(`operations__tab--active`));
  clickedBtn.classList.add(`operations__tab--active`);

  // remove active class from all <div>s with content to show
  // and add active class only to <div> with correct numberContent class
  tabsContents.forEach((el) =>
    el.classList.remove(`operations__content--active`)
  );
  document
    .querySelector(`.operations__content--${numberContent}`)
    .classList.add(`operations__content--active`);
});
