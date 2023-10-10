"use strict";

////////////////////////////////////////
//// The Rest Pattern in JavaScript ////
////////////////////////////////////////
// Coding Note #20

// You can use the rest pattern to collect all (or all remaining) elements into an array.
// This is why it's called the "Rest Pattern" because it takes the rest of the elements
// in the destructuring assignment and places them into a new array.

// The rest pattern has the same syntax as the spread operator (...)
// but is typically positioned on the left side of the "=" sign,
// unlike the spread operator, which is usually positioned on the right side.

// Basic syntax
const [numberOne, numberTwo, ...allOtherNumbers] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numberOne, numberTwo); // 1 2
console.log(allOtherNumbers); // [3, 4, 5, 6, 7, 8, 9]

// Example using a function
// This function expects individual numbers as arguments
const addAllNumbers = function (...allNumbers) {
  let totalSum = 0;
  for (const num of allNumbers) totalSum += num;
  return totalSum;
};

const arrayNumbers = [1, 2, 3, 4, 5];
const result1 = addAllNumbers(...arrayNumbers);
const result2 = addAllNumbers(2, 3, 4, 5, 6);
console.log(result1); // 15
console.log(result2); // 20

// Follow @coding_feature on Instagram 👍
