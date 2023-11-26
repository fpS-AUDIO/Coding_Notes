"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

///////////////////////////////////////////
//// array.sort() method in JavaScript ////
///////////////////////////////////////////
// Coding Note #45

//  SYNTAX:   array.sort(callback(a, b))
//            a = current value, b = next value (of any iteration)

// sort() method, by default (without arguments), does the sorting basing on strings from A to Z.
// So if you sort numbers, without giving a callback function with its own rules,
// it converts the numbers to the strings, sorts them (like strings in UTF-16 code units order), and reconverts them to numbers again.
// Careful, this method mutates the original array and returns the reference to the same array.

// Examples with default behavior:
const arrayLetters = [`b`, `c`, `a`, `z`, `d`, `m`];
const arrayNumbers = [-4, 135, 10, 27, -10, -9, 4];

console.log(arrayLetters.sort()); // ['a', 'b', 'c', 'd', 'm', 'z']
console.log(arrayNumbers.sort()); // [-10, -4, -9, 10, 135, 27, 4]

// ------------------------------------------------------- //

// You can change the default behavior by adding the callback function with its own rules
// sort() method keeps looping over the array applying the callback function until everything is sorted

// Rules of the callback function:
//   - If you return a negative value (like -1), then the value "a" will be placed before "b".
//   - If you return a positive value (like 1), then the value "a" will be placed after "b".
//   - If you return 0, the position remains unchanged.

// sort in ascending order
const ascendingArrayNumbers = arrayNumbers.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(ascendingArrayNumbers); // [-10, -9, -4, 4, 10, 27, 135]

// same result but with easier syntax
const ascendingArrayNumbers2 = arrayNumbers.sort((a, b) => a - b);
console.log(ascendingArrayNumbers2); // [-10, -9, -4, 4, 10, 27, 135]

// Follow @coding_feature on Instagram for more content! 👍

//////////////////////////////////////////////////////
console.log(`---------------NEW STAFF---------------`);
//////////////////////////////////////////////////////
