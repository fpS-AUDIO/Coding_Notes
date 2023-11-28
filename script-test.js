"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//// array.slice() and array.splice() methods in JavaScript ////
////////////////////////////////////////////////////////////////
// Coding Note #47

// SYNTAX:      slice(startIndex, endIndex)
// Returns a portion of an array WITHOUT MUTATING the original (end is NOT included).
// If no arguments are passed, this method creates a shallow copy of the array.
// You can store the shallow copy in a different variable or even chain methods.

const arrayNumbers = [1, 2, 3, 4, 5];

console.log(arrayNumbers.slice(2)); // [3, 4, 5]
console.log(arrayNumbers.slice(2, 4)); // [3, 4]
console.log(arrayNumbers.slice(-2)); // [4, 5]
console.log(arrayNumbers.slice(1, -1)); // [2, 3, 4]
console.log(arrayNumbers.slice()); // [1, 2, 3, 4, 5]

// ------------------------------------------------------- //

// SYNTAX:      splice(startIndex, numberOfElementsToRemoveFromStart)
// Returns the extracted part of an array, MUTATING the original.

console.log(arrayNumbers); // [1, 2, 3, 4, 5] (unchanged)

console.log(arrayNumbers.splice(0, 2)); // [1, 2]; first two elements
console.log(arrayNumbers); // [3, 4, 5] (now mutated)

console.log(arrayNumbers.splice(-2)); // [4, 5]; last 2 elements
console.log(arrayNumbers); // [3] (mutated again)

// ------------------------------------------------------- //

// SUMMARY:
// - Use slice() to obtain a part of an array without modifying the original.
// - Use splice() to extract elements from an array, mutating the original array.

// Follow @coding_feature on Instagram for more content! 👍

//////////////////////////////////////////////////////
console.log(`---------------NEW STAFF---------------`);
//////////////////////////////////////////////////////
