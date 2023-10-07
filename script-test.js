"use strict";

//////////////////////////////////////////////////
//// The Spread Operator in JavaScript part 1 ////
//////////////////////////////////////////////////

// It helps you expand (unpack) an iterable into all its elements.
// It also works with objects (non-iterables) by creating shallow copies.
// It takes all elements and doesn't create new variables.
// It helps you:
//    - Merge iterables and objects by combining their elements.
//    - Pass arguments into functions by spreading an array or object.
//    - Unpack iterables and objects by separating their elements.
//    - Create shallow copies of iterables and objects.

//////// just data for examples below ////////
const array1 = [3, 4, 5];
const array2 = [8, 9];

// basic syntax
const array3 = [1, 2, ...array1, 6, 7];
console.log(array3); // [1, 2, 3, 4, 5, 6, 7]

// just unpack an array
console.log(...array1); // 3 4 5

// copy array
const copyArray3 = [...array3];
console.log(copyArray3); // [1, 2, 3, 4, 5, 6, 7]

// merge arrays
const array4 = [...array1, ...array2];
console.log(array4); // [3, 4, 5, 8, 9]

// follow @coding_feature on Instagram 👍
