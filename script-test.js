"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//// array.map() Method in JavaScript ////
//////////////////////////////////////////
// Coding Note #38

// SYNTAX: array.map(function(element, index, array) {...})

// The map() method returns a new array containing all elements transformed by the callback function from the original array.
//    Here's how it works:
// 1. It loops over the original array,
// 2. Transforms the current element with the callback function,
// 3. Pushes the transformed element to the new array,
// 4. Finally, returns the new array with all transformed elements.
// Also the map() methos doesn't mutate the original array.
//

// Note:  You can include more than one "return" statement in the callback body,
//        but only one should be executed (similar to an if/else statement).

// Example: Creating a new array where each element is the power of 2
const originalArray = [1, 2, 3, 4, 5];
const resultArray = originalArray.map(function (element) {
  return element ** 2;
});
console.log(resultArray); // [1, 4, 9, 16, 25]

// Same example, but using arrow function syntax
const resultArrayArrow = originalArray.map((element) => element ** 2);
console.log(resultArrayArrow); // [1, 4, 9, 16, 25]

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
