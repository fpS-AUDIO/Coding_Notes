"use strict";

///////////////
// Challenge //
///////////////

// class Car {
//   constructor(options) {
//     this.make = options.make;
//     this.speed = options.speed;
//   }

//   accelerate() {
//     this.speed += 10;
//   }

//   brake() {
//     this.speed -= 5;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(miH) {
//     this.speed = miH * 1.6;
//   }
// }

// const ford = new Car({
//   make: `Ford`,
//   speed: 120,
// });

// ford.accelerate();
// ford.brake();
// console.log(ford);

// console.log(ford.speedUS);
// ford.speedUS = 80;
// console.log(ford);

// ---------------------------------------------------------------------------------------- //

// const Car = function (options) {
//   this.make = options.make;
//   this.speed = options.speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   return this.speed;
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   return this.speed;
// };

// const EV = function (options) {
//   Car.call(this, options);
//   this.charge = options.charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} is going at ${this.speed} and has a charge of ${this.charge}`
//   );
// };

// const tesla = new EV({
//   make: `Tesla`,
//   speed: 120,
//   charge: 45,
// });

// tesla.accelerate(); // Tesla is going at 140 and has a charge of 44
// console.log(tesla.brake()); // 135
// tesla.chargeBattery(90);
// console.log(tesla.charge); // 90
// tesla.accelerate(); // Tesla is going at 155 and has a charge of 89

// console.dir(tesla);

///////////////////////////////////////
// OOP - INHERITANCE BETWEEN CLASSES //
///////////////////////////////////////

// Steps to manipulate the prototype chain using Object.create():

// first create parent a prototype (simple object)
const PersonPrototype = {
  // set the prototype method which will be inherited to all the instances
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  // creating a method which will set the propreties
  // convensionally it's called `init`, but you can call is as you want
  init(options) {
    this.name = options.name;
    this.birthYear = options.birthYear;
  },
};

// creating the object which will inherit from `PersonPrototype`
// this is gonna be the child prototype
const StudentPrototype = Object.create(PersonPrototype);

// overwriting the `init` method
StudentPrototype.init = function (options) {
  // use the same trick as in constructor functions
  PersonPrototype.init.call(this, options);
  this.study = options.study;
};

// create an object instance of `StudentPrototype`
const alex = Object.create(StudentPrototype);
alex.init({
  name: `Alex`,
  birthYear: 1996,
  study: `Coding`,
});

console.log(alex); // {name: 'Alex', birthYear: 1996, study: 'Coding'}
alex.calcAge(); // 28

// indeed you can also overwrite the `calcAge()` method
StudentPrototype.calcAge = function () {
  console.log(`I feel older then ${2024 - this.birthYear}`);
};

alex.calcAge(); // I feel older then 28
