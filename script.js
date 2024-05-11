"use strict";

/////////////////////////////////////////////////
//// OOP - Function Prototypes in JavaScript ////
/////////////////////////////////////////////////
// Coding Note #60

/* ------ Prototypes:
 - Every function in JavaScript has a property called `prototype`.
 - Every object created by a constructor function gains access to all
   methods and properties defined in the constructor's `prototype` property.
 - Each instance object has a special internal property, `__proto__`, 
   which references the `prototype` of the constructor function.
   In other words, the `prototype` of the constructor becomes the `__proto__` of its instances.
*/

// Example constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Create an instance of Person
const alex = new Person("Alexander", 1996);

// Access the `prototype` property of the constructor function
console.log(Person.prototype); // {constructor: ƒ}

// Add a method `changeFirstName` to the `prototype` of Person so that all instances can access it
Person.prototype.changeFirstName = function (newFirstName) {
  this.firstName = newFirstName;
};

// The `alex` instance now has access to this method
alex.changeFirstName("Alex");

// Access the special internal property `__proto__`
console.log(alex.__proto__); // {changeFirstName: ƒ, constructor: ƒ}
console.log(alex.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(alex)); // true

// Add a shared property to the prototype
Person.prototype.species = "human";
console.log(alex.species); // human

// Check if a property belongs to an instance itself or is inherited from the prototype
console.log(alex.hasOwnProperty("firstName")); // true
console.log(alex.hasOwnProperty("species")); // false

// make contnet about --- prototypal chain --- and --- static methods ---



