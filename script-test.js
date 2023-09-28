"use strict";

//////////////////////////
// Objects in JavaScript //
//////////////////////////
// follow @coding_feature on Instagram 👍

// second method to create a map is to create an array witch contains multiple arrays with key:value
// const mapName = new Map([[key, value], [key, value]])
const question = new Map([
  [`question`, `What is the best language in the world?`],
  [1, `C++`],
  [2, `Ruby`],
  [3, `Python`],
  [4, `JavaScript`],
  [`correct`, 4],
  [true, `Congrats!`],
  [false, `Try again...`],
]);

// object example for data below
const openingHoursObject = {
  thu: {
    open: 12,
    close: 22,
  },

  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

// array of arrays is exactly the same array structure that is returned from Object.entries(object)
// so we can convert objects to maps
const openingHoursMap = new Map(Object.entries(openingHoursObject));

// convert a map to an array -> get array of arrays
console.log([...question]);

// we also have the same methods of arrays:
console.log([...question.keys()]);
console.log([...question.values()]);

/////////////////////////////////

// ---EXAMPLE TO USE THE MAP---

console.log(question.get(`question`));

// since maps are iterables we can loop them
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}

// suppose the answer is got from prompt()
const answer = 4;
console.log(question.get(answer === question.get(`correct`)));
