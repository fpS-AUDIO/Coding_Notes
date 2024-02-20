"use strict";

///////////////
// Challenge //
///////////////

class Car {
  constructor(options) {
    this.make = options.make;
    this.speed = options.speed;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(miH) {
    this.speed = miH * 1.6;
  }
}

const ford = new Car({
  make: `Ford`,
  speed: 120,
});

ford.accelerate();
ford.brake();
console.log(ford);

console.log(ford.speedUS);
ford.speedUS = 80;
console.log(ford);
