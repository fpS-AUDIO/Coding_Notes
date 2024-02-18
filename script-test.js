"use strict";

///////////////////////////
// Constructor functions //
///////////////////////////

// ---------------------------------------------------------------------------------------- //
// --- syntax, new and instanceof ---

/*  Constructor functions:
 - used to build objects from a function.
 - are same as normal functions but called with `new` operator.
 - start with a capital letter (following OOP convention).
 - work with function expression and declaration.
 - don't work with arrow function since it doesn't have its own `this` keyword.
*/

/*  `new` keyword make happen behind the scene:
 1. new empty objects is created 
 2. the function is called, and `this` is pointing to the newly created object  
 3. this newly created object is linked to its prototype
 4. this objects is automatically returned from the constructor function
*/

// creating constructure functions for a person
const Person = function (firstName, birthYear) {
  // create a property of `this` keyword and its value from ricieved argument.
  // same property name of parameter just for convention.
  // these are instance properties:
  this.firstName = firstName;
  this.birthYear = birthYear;

  // you should NEVER make methods inside the constructure function.
  // because each instance will copy this method and it's really bad for performace.
  // to solve this problem use prototypes and prototype inheritance.
  //   this.calcAge = function () {
  //     console.log(2024 - this.birthYear);
  //   };
};

// calling this function
const alex = new Person(`Alexander`, 1996);
console.log(alex); // Person {firstName: 'Alexander', birthYear: 1996}

const roman = new Person(`Roman`, 1998);
console.log(roman); // Person {firstName: 'Roman', birthYear: 1998}

// now `alex` and `roman` are instances of `Person`.
// you can also check this:
console.log(alex instanceof Person); // true

// ---------------------------------------------------------------------------------------- //
// --- prototypes ---

/*  Prototypes:
 -  each function in JS automatically has a property called `prototype`.
 -  every object created by constructor function will get access to all
    methods and properties definded in the constructors prototype property.
 -  each instance object has a special property `__proto__` which is prototype (not property)
    so the `prototype` of constructor function is a property (not prototype)
    which becomes `prototype` (not property) for instances.
*/

// get access to `prototype` property of constructor function `Person`
console.log(Person.prototype); // {constructor: ƒ}

// add method `calcAge` to `prototype` of `Person` which will be accessible to all instances
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

// now two instances (`alex` and `roman`) has access to this method
alex.calcAge(); // 28
roman.calcAge(); // 26

// get access to special property `__proto__`
console.log(alex.__proto__); // {calcAge: ƒ, constructor: ƒ}
console.log(alex.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(alex)); // true

// indeed you can also set the properties of prototype of instances
Person.prototype.species = `human`;
console.log(alex.species); // human

// you can check if a property is accessible from prototype
// or it's a property of that single instance
console.log(alex.hasOwnProperty(`firstName`)); // true
console.log(alex.hasOwnProperty(`species`)); // false

console.log(`--- prototypes ---`);
