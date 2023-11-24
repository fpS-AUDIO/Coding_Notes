"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
//// array.some() and array.every() methods in JavaScript ////
//////////////////////////////////////////////////////////////
// Coding Note #43

// SYNTAX:  array.some(callbackFn, thisValue)
//          array.some(function (element, index, array), thisValue)
//          array.every(function (element, index, array), thisValue)

// The array.some() method tests if AT LEAST ONE element of an array passes the given test.
// It requires a callback function as the first argument.
// The callback function can accept 3 optional parameters: the current element, its index, and the entire array.
// An evaluation follows the 'return' keyword of the callback function, returning a boolean.
// The method returns 'true' if at least one element of the array passes the test in the callback function.
// Additionally, you can provide the value of the 'this' keyword by passing it as the second argument of the some() method.
// Importantly, the original array remains unaltered.

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Example:
// Check if the array contains at least one even number
const hasEven1 = arrayNumbers.some(function (num) {
  return num % 2 === 0;
});
console.log(hasEven1); // true

// Same example but using arrow function syntax
const hasEven2 = arrayNumbers.some((num) => num % 2 === 0);
console.log(hasEven2); // true

// ------------------------------------------------------- //

// The array.every() method is exactly the same as some() but it returns true only if ALL elements pass the condition.

// Check if the array contains only even numbers
const onlyEven = arrayNumbers.every((num) => num % 2 === 0);
console.log(onlyEven); // false

// Follow @coding_feature on Instagram for more content! 👍

//////////////////////////////////////////////////////
console.log(`---------------NEW STAFF---------------`);
//////////////////////////////////////////////////////
