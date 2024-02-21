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

class CarCl {
  constructor(options) {
    this.make = options.make;
    this.speed = options.speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`Car is accelering...`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`Car is braking...`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(options) {
    super(options);
    this.#charge = options.charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate = function () {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} and has a charge of ${
        this.#charge
      }`
    );
    return this;
  };
}

const tesla = new EVCl({
  make: `Tesla`,
  speed: 120,
  charge: 45,
});

tesla.accelerate(); // Tesla is going at 140 and has a charge of 44
tesla.brake(); // Car is braking...
tesla.chargeBattery(90);
tesla.accelerate(); // Tesla is going at 155 and has a charge of 89

// test chaining
tesla.accelerate().brake().chargeBattery().accelerate(); // OK
