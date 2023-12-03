"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
//// array.indexOf() and array.lastIndexOf() methods in JavaScript ////
///////////////////////////////////////////////////////////////////////
// Coding Note #52

// SYNTAX:        array.indexOf(searchElement, fromIndex).
// The indexOf() method returns the first index of the `searchElement` passed as an argument.
// It uses strict equality (===) when comparing elements.
// Optionally, you can specify the start index (inclusive) for searching as the second argument.
// If the element is not present, it returns -1.

const arrayLetters = [`a`, `b`, `c`, `a`, `b`, `c`];

// Example 1: Finding the first index of 'b'
const firstIndex = arrayLetters.indexOf(`b`);
console.log(firstIndex); // Output: 1

// Example 2: Finding the index of 'b' starting from index 2
const secondIndex = arrayLetters.indexOf(`b`, 2);
console.log(secondIndex); // Output: 4

// ------------------------------------------------------- //

// SYNTAX:        array.lastIndexOf(searchElement, fromIndex)
// The lastIndexOf() method is similar to indexOf() but returns the last index of the element.
// It searches the array backward, optionally starting from the specified `fromIndex`.

// Example 3: Finding the last index of 'a'
const lastIndex = arrayLetters.lastIndexOf(`a`);
console.log(lastIndex); // Output: 3

// Follow @coding_feature on Instagram for more content! 👍
