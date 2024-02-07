"use strict";

/*
COURSE FULL
---------------------------------------------------------------------------------
// function which creates a random number between MIN and MAX
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// 3 event listeners on <a>, <li> and <nav> (where last is parent) to change color on random on click
document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
  const randomColor = `rgb(${randomInt(0, 255)},${randomInt(
    0,
    255
  )},${randomInt(0, 255)})`;
  this.style.backgroundColor = randomColor;
  console.log(`target:`, e.target);
  console.log(`currentTarget:`, e.currentTarget);

  // stop event propagation
  e.stopPropagation();
});

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  const randomColor = `rgb(${randomInt(0, 255)},${randomInt(
    0,
    255
  )},${randomInt(0, 255)})`;
  this.style.backgroundColor = randomColor;
  console.log(`target:`, e.target);
  console.log(`currentTarget:`, e.currentTarget);
});

document.querySelector(`.nav`).addEventListener(`click`, function (e) {
  const randomColor = `rgb(${randomInt(0, 255)},${randomInt(
    0,
    255
  )},${randomInt(0, 255)})`;
  this.style.backgroundColor = randomColor;
  console.log(`target:`, e.target);
  console.log(`currentTarget:`, e.currentTarget);
});
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
NEW NOTE
---------------------------------------------------------------------------------

// Function to generate a random RGB color.
function randomRGB() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Adding event listeners to nested elements (.nav__link > .nav__links > .nav).
document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomRGB();
  console.log('Link:', e.target, 'Current Target:', e.currentTarget);
  // Stop propagation to prevent parent elements from handling the same event.
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomRGB();
  console.log('Links Container:', e.target, 'Current Target:', e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomRGB();
  console.log('Nav:', e.target, 'Current Target:', e.currentTarget);
});


*/
