"use strict";

const btnOpenModal = document.querySelectorAll(".open-modal-window");
const btnCloseModal = document.querySelectorAll(".close-modal-window");
const modalWindows = document.querySelectorAll(".modal-window");

// btnOpenModal.addEventListener(`click`, () => {
//   modalWindow.showModal();
// });

btnOpenModal.forEach((button, index) => {
  button.addEventListener("click", () => {
    modalWindows[index].showModal();
  });
});

btnCloseModal.forEach((button, index) => {
  button.addEventListener("click", () => {
    modalWindows[index].close();
  });
});

// to close on click
const modal01 = document.getElementById(`dialog1`);

modal01.addEventListener(`click`, (event) => {
  const dialogDimensions = modal01.getBoundingClientRect();
  if (
    event.clientX < dialogDimensions.left ||
    event.clientX > dialogDimensions.right ||
    event.clientY < dialogDimensions.top ||
    event.clientY > dialogDimensions.bottom
  ) {
    modal01.close();
  }
});
