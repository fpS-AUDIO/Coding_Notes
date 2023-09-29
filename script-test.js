"use strict";

//////////////////////////////////
// Objects Basics in JavaScript //
//////////////////////////////////

// Object = data type represented by an unordered collection of key-value pairs
// Property = every key-value pair is called a property
// The key of a property can be a string
// The value of a property can be any value

////// just data for object example below //////
const exampleData = [`weight`, `height`, `colorEyes`];
////////////////////////////////////////////////

const person1 = {
  firstName: `Alex`,
  lastName: `Hamilton`,
  age: 2023 - 1990,
  sports: [`ski`, `scubadiving`, `hiking`],
  [exampleData[0]]: 80,
  [exampleData[2]]: `blu`,
};

// follow @coding_feature on Instagram 👍
console.table(person1);
