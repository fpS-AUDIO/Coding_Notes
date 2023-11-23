"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
//// Using the array.findIndex() method in JavaScript ////
//////////////////////////////////////////////////////////
// Coding Note #42

// SYNTAX:  array.findIndex(callback, thisValue)
//          array.findIndex(callback(element, index, array), thisValue)

// The array.findIndex() method requires a callback function that should return a boolean.
// If the returned boolean is true, the findIndex() method returns the index of that element.
// The callback function can optionally accept three parameters: the current element, its index, and the entire array.
// Note: If no values satisfy the testing function, the method returns -1.
// Additionally, the second argument of findIndex() allows you to specify the value of the "this" keyword during execution.

const arrayNumbers = [20, 48, 3, -21, 52, -98, 2, -5];

// Searching for the index of the 1st negative number in the given array
const resultIndex1 = arrayNumbers.findIndex(function (num) {
  return num < 0; // Output: 3
});
console.log(resultIndex1);

// Same example but using the arrow function syntax
const resultIndex2 = arrayNumbers.findIndex((num) => num < 0);
console.log(resultIndex2); // Output: 3

// Follow @coding_feature on Instagram for more content! 👍

//////////////////////////////////////////////////////
console.log(`---------------NEW STAFF---------------`);
//////////////////////////////////////////////////////
