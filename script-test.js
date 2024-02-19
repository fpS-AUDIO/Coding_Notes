"use strict";

///////////////////
// Classes in JS //
///////////////////

/* Theory:
 -  Classes in JS are not working like traditional classes in other programming languages
 -  They are just syntactic sugar and they do the exact same thing as constructor function
    with its prototypal inheritans but they're using a nicer and more modern syntax.
 -  Class are special type of functions so they can be expression and declaraytion
 -  Any type of class is not hoisted (even declaration)
 -  Classes are first-class citizes (you can pass classes like arguments and return them from functions)
 -  Body of class is always executed in strict mode
*/

// ---------------------------------------------------------------------------------------- //
// --- syntax ---

// class expression
// const PersonClass = class {};

// class declaration
class PersonClass {
  // `constructor` is the method of `class`
  constructor(firstName, birthYear) {
    // specify properties you wanna create in object
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // outside (below) the body of constructor() specify methods of .prototype
  // note:  you don't need to use commas
  calcAge() {
    return 2024 - this.birthYear;
  }

  hello() {
    return `Hello ${this.firstName}`;
  }
}

// when we create a new istance of class the constructor() is called automatically
const alex = new PersonClass(`Alexander`, 1996);
console.log(alex); // PersonClass {firstName: 'Alexander', birthYear: 1996}
console.log(alex.calcAge()); // 28
console.log(alex.hello()); // Hello Alexander

// proof that class acts like any function constructor
console.log(alex.__proto__ === PersonClass.prototype); // true

// ---------------------------------------------------------------------------------------- //
// --- setters and getters ---
