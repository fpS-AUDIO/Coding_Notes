"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
//// Using the array.reduce() Method in JavaScript ////
///////////////////////////////////////////////////////
// Coding Note #40

// Syntax:  array.reduce(callback, initialValue);
//          array.reduce(function(accumulator, currentElement, index, array) {...}, initialAccumulatorValue);

// The `reduce` method returns a single value ("accumulator") by iteratively applying the callback function to each element in the array.
// The callback function takes four parameters: accumulator, currentElement, index, and array.
// Remember that the initial value is optional. If omitted, the first element of the array becomes the initial accumulator value.

// Example:
// Let's find the sum of an array of numbers using the reduce method.
// The accumulator starts with an initial value of 0 and gets updated with each element in the array.
const numbersArray = [1, 2, -3, 4, 5, -6, 7, 2];
const sum1 = numbersArray.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
}, 0);
console.log(sum1); // Output: 12

// Same example using arrow function syntax.
// Note that when the initial value is omitted, the first element of the array becomes the initial accumulator value.
const sum2 = numbersArray.reduce((accum, el) => accum + el);
console.log(sum2); // Output: 12

// Follow @coding_feature on Instagram for more content! 👍

//////////////////////////////////////////////////////
console.log(`---------------CHALLENGE---------------`);
//////////////////////////////////////////////////////

/* 
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK �

*/

// function 'calcAverageHumanAge', which accepts an arrays of dog's ages;
const calcAverageHumanAge = function (arrayAges) {
  // 1. Calculate the dog age in human years using the following formula: if the dog is
  // <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
  // humanAge = 16 + dogAge * 4
  const humanAges = arrayAges.map((element) =>
    element <= 2 ? 2 * element : 16 + element * 4
  );

  // Exclude all dogs that are less than 18 human years old
  const adult18plus = humanAges.filter((element) => element >= 18);

  // Calculate the average human age of all adult dogs (you should already know
  // from other challenges how we calculate averages )
  return (
    adult18plus.reduce(function (accum, element) {
      return accum + element;
    }, 0) / adult18plus.length
  );
};

// testing
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// same function 'calcAverageHumanAge' but arrow function syntax and chaining
const calcAverageHumanAgeArrow = (arrayAges) => {
  return arrayAges
    .map((element) => (element <= 2 ? 2 * element : 16 + element * 4))
    .filter((element) => element >= 18)
    .reduce((accum, element, _, arr) => accum + element / arr.length, 0);
};

console.log(calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]));

//////////////////////////////////////////////////////////////////////////
