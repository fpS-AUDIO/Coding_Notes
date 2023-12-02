"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
//// array.unshift() and array.shift() methods in JavaScript ////
/////////////////////////////////////////////////////////////////
// Coding Note #51

// SYNTAX:        array.unshift(element)
// The unshift() method adds new elements to the beginning of an array.
// It returns the new length of the array.
// Note: This method mutates the original array.

const yourArray = [5, 6, 7];
const newLength = yourArray.unshift(1, 2, [3, 4]);
// Adding elements to the beginning of the array.
console.log("New Length:", newLength); // New Length: 6
console.log("Updated Array:", yourArray); // Updated Array: [1, 2, [3, 4], 5, 6, 7]

// ------------------------------------------------------- //

// SYNTAX:        array.shift()
// The shift() method removes the first element of an array.
// It returns the removed element or undefined if the array was empty.
// Note: This method mutates the original array.

const removedElement = yourArray.shift();
// Removing the first element from the array.
console.log("Removed Element:", removedElement); // Removed Element: 1
console.log("Updated Array:", yourArray); // Updated Array: [2, [3, 4], 5, 6, 7]

// Follow @coding_feature on Instagram for more content! 👍
