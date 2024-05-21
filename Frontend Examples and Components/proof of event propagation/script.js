"use strict";

// selecting div elements
const grandmoother = document.querySelector(`.grandmother`);
const mother = document.querySelector(`.mother`);
const daughter = document.querySelector(`.daughter`);

// Function to generate a random RGB color.
function randomRGB() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

// Event listeners
grandmoother.addEventListener(`click`, function (e) {
  const randomColor = randomRGB();
  this.style.backgroundColor = randomColor;
  console.log(`target:`, e.target);
  console.log(`currentTarget:`, e.currentTarget);

  e.stopPropagation();
});

mother.addEventListener(`click`, function (e) {
  const randomColor = randomRGB();
  this.style.backgroundColor = randomColor;
  console.log(`target:`, e.target);
  console.log(`currentTarget:`, e.currentTarget);
});

daughter.addEventListener(`click`, function (e) {
  const randomColor = randomRGB();
  this.style.backgroundColor = randomColor;
  console.log(`target:`, e.target);
  console.log(`currentTarget:`, e.currentTarget);
});
