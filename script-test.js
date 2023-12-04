"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

////////////////////////////////////////////
//// Array.from() Method in JavaScript ////
////////////////////////////////////////////
// Coding Note #53

// SYNTAX: Array.from(arrayLike)
// SYNTAX: Array.from(arrayLike, mapFunction(element, index, array), thisArg)

// The Array.from() method is used to create an array from an iterable or array-like object.
// It is particularly useful, for example, when applying array methods to a NodeList obtained from querySelectAll().
// Optionally, a mapping function (similar to the map() function for arrays) can be passed as the second argument.
// Additionally, a value for the "this" keyword can be provided as the third parameter (default is undefined).
// Note: This method is called on the Array object (not instances).

// Example 1
const arrayFromStr = Array.from(`coding`);
console.log(arrayFromStr); // ['c', 'o', 'd', 'i', 'n', 'g']

// Example 2: Creating an array of squared numbers
const arrayFromObj = Array.from({ length: 5 }, (_, i) => i * i);
console.log(arrayFromObj); // [0, 1, 4, 9, 16]

// Follow @coding_feature on Instagram for more content! 👍
