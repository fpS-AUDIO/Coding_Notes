"use strict";

////////////////////////////////
//// Closures in JavaScript ////
////////////////////////////////
// Coding Note #55

/* Definition:
    A closure in JavaScript is a feature that allows a function to access variables from its 
    enclosing scope, even after the outer function has finished executing. The function retains 
    a reference to its lexical environment, enabling it to interact with the outer function's 
    variables. Closures are crucial for creating private variables, managing state in 
    asynchronous programming, and implementing function factories and module patterns.
*/

// Example: Function to create an adder with a private counter
function createCounter() {
  let count = 0; // `count` is a private variable created by `createCounter`
  return function () {
    count++; // Increment and access `count` from the outer lexical environment
    console.log(count);
  };
}

// Creating a counter instance
const counterAddOne = createCounter();

counterAddOne(); // Outputs: 1
counterAddOne(); // Outputs: 2
counterAddOne(); // Outputs: 3


// Follow @coding_feature on Instagram for more content! 👍
