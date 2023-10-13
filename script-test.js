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
