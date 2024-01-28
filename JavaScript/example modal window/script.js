"use strict";

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);
const btnCloseModal = document.querySelector(`.close-modal`);

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

// eterating thrue the list of `btnsOpenModal` buttons list
for (let i = 0; i < btnsOpenModal.length; i++) {
  // add EventListener for every element of the list
  btnsOpenModal[i].addEventListener(`click`, openModal);
}

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

// listening for events everywhere
// we can call `event` parameter as we want, for example `pizza`
document.addEventListener(`keydown`, function (event) {
  if (event.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});

// --------------------- MORE --------------------- //

// (!) To work with classes we can use Element.classList is a read-only property
//     which returns a list of class attributes of the element.

//     We can modify the tokens of the list using:
//     -   add()
//     -   remove()
//     -   replace()
//     -   toggle()
//     -   contains()

//     syntax: element.classList.method(`class-name`)
//             DON'T USE . # (we are not selecting elements)

// ------------------------------------------------ //

// (!) keyboard events are global events because they don't happen on a specific element.
// And for global events like keyboard events we usually listen on the whole document.

// // this will happen for EVERY key pressed
// document.addEventListener(`keydown`, function);

// there are 3 type of keyboard event:
//     1. `keydown`    just press down the key
//     2. `keypress`   fired continuously as the finger is on the key
//     3. `keyup`      when lift off the finger
