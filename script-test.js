"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
//// Using the array.filter() Method in JavaScript ////
///////////////////////////////////////////////////////
// Coding Note #39

// SYNTAX: array.filter(function(element, index, array) {...})

// The array.filter() method is a tool for filtering elements based on a specified test condition.
// This method returns a new array containing only the elements that pass the specified test condition defined in the callback function.
// The callback function is executed on each iteration, receiving the current element, its index, and the entire array (last 2 are optional).
// If the condition specified in the callback function after the "return" keyword evaluates to true ...
//  ... the current element will be included in the new filtered array.

// -------------- Data for the examples below -------------- //
const users = [
  { name: `David`, age: 27 },
  { name: `Alice`, age: 16 },
  { name: `Alex`, age: 26 },
  { name: `John`, age: 17 },
];
// --------------------------------------------------------- //

// Example: Filtering users younger than 18
const youngUsers = users.filter(function (user) {
  return user.age < 18;
});
console.log(youngUsers); // [{name: 'Alice', age: 16}, {name: 'John', age: 17}]

// Same example using arrow function syntax
const youngUsersArrow = users.filter((user) => user.age < 18);
console.log(youngUsersArrow); // [{name: 'Alice', age: 16}, {name: 'John', age: 17}]

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
