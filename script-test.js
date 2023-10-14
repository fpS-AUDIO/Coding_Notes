"use strict";

// function returning other function
const greet = function (greetStr) {
  return function (name) {
    console.log(`${greetStr} ${name}`);
  };
};

// the result of greet() function call is a function
// store the result in the variable "greetHello" and now its value it's a function
// this works thanks to closure (difficult topic)
const greetHello = greet(`Hello`);
greetHello(`World`); // output:  Hello World

// so we can write it in a single row since "greet(`Goodmoring`)" is now has the value of function
greet(`Goodmoring`)(`everybody`);
// output:  Goodmoring everybody

// same function but wrote as Arrow Function
const greetArrow = (greetStr) => (name) => console.log(`${greetStr} ${name}`);
greetArrow(`Hi`)(`People`);
// output:  Hi People

///////////////////////////////////////////////////////////////
console.log(`------------- For @coding_feature -------------`);
///////////////////////////////////////////////////////////////

////////////////////////////
//// Sets in JavaScript ////
////////////////////////////
// Coding Note #22

// Sets are collections of any data types but only unique values.
// Sets are also iterables but they are unordered (there are no indexes).
// Sets can be empty and they were introduced in ES6.
// Sets can help you, for example, remove duplicates from an array

// Creating a set:
const setName1 = new Set([6, `pizza`, 3, `pizza`, 6, 5, `pasta`]);

//  Creating an empty set using constructor
const setName2 = new Set();
console.log(setName2); // OUTPUT:  Set(0) {size: 0}

console.log(setName1); // OUTPUT:  {6, 'pizza', 3, 5, 'pasta'}

// Size property of a set:
console.log(setName1.size); // OUTPUT:  5

// Create a new array from a set using the spread operator
const arrayFromSet = [...setName1];
console.log(arrayFromSet); // OUTPUT: [6, 'pizza', 3, 5, 'pasta']

//    Other set methods:
setName1.add(8); // Adds the value 8 to the set
const hasPizza = setName1.has("pizza"); // Returns true if 'pizza' is in the set
setName1.delete(3); // Removes the value 3 from the set
setName1.forEach((value) => console.log(value)); // Invokes a callback for each element
const valuesIterator = setName1.values(); // Returns an iterator with all the values
const keysIterator = setName1.keys(); //  Returns an iterator with all keys of the set
const entriesIterator = setName1.entries(); // Returns an iterator with [value, value] pairs
setName1.clear(); //  Removes all elements from a Set

// Follow @coding_feature on Instagram 👍
