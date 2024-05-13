"use strict";

////////////////////////////////////////////////
//// OOP - ES6 Classes Basics in JavaScript ////
////////////////////////////////////////////////
// Coding Note #62

/* ----- Some Key Points:
 -  Classes in JavaScript are syntactic sugar over the existing prototypal inheritance, 
    so they're not traditional classes like in other languages.
 -  Classes are special types of functions and can be defined as expressions or declarations.
 -  Unlike function declarations, class declarations are not hoisted.
 -  Classes are first-class citizens: they can be passed as arguments and returned from functions.
 -  The body of a class is always executed in strict mode.
 */

// ---------------------------------------------------------------------------------------- //
// Syntax Examples:

// Class expression syntax
// const Person = class {};

// Class declaration syntax
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods defined here are added to the prototype and are non-enumerable
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  greet() {
    return `Hello ${this.firstName}`;
  }
}

// Instantiation: The constructor is called automatically when a new instance is created
const alex = new Person("Alexander", 1996);

console.log(alex); // Output: Person { firstName: 'Alexander', birthYear: 1996 }
console.log(alex.calcAge()); // Output based on current year
console.log(alex.greet()); // Output: Hello Alexander

// Demonstration that the prototype of alex is Person.prototype
console.log(alex.__proto__ === Person.prototype); // Output: true
