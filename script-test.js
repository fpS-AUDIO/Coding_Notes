"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

///////////////////////////////////////////
//// array.fill() method in JavaScript ////
///////////////////////////////////////////

// Coding Note #46

// SYNTAX:  array.fill(value, startIndex, endIndex)

// In JavaScript, there are situations where you can't apply certain array methods (like map()) on arrays because they are empty.
// For such cases, and others, the fill() method comes in handy.
// This method populates the entire array with the given value by mutating it.
// You can call the fill() method on an empty array.
// Optionally, you can pass startIndex and endIndex parameters (where endIndex is not included).

// If you specify only one argument (numberIndexes) in the array constructor,
// JavaScript will create an empty array with a length of numberIndexes.

// Creating an empty array with the new Array() constructor with a length of 5.
const myArray = new Array(5);
console.log(myArray); // [empty × 5]

// Filling the array with the value 'A'.
myArray.fill("A");
console.log(myArray); // ['A', 'A', 'A', 'A', 'A']

// Filling the array with the number 7 from index 1 to index 3 (not including index 3).
myArray.fill(7, 1, 3);
console.log(myArray); // ['A', 7, 7, 'A', 'A'];

// Follow @coding_feature on Instagram for more content! 👍

//////////////////////////////////////////////////////
console.log(`---------------NEW STAFF---------------`);
//////////////////////////////////////////////////////
