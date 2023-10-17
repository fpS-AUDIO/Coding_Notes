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

/////////////// data for example below ///////////////
const lufthansa = {
  airline: `Lufthansa`,
  fligthCode: `LH`,
  bookings: [],

  book(flightNumber, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.fligthCode}${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.fligthCode}${flightNumber}`,
      name: passengerName,
    });
  },
};

const alitalia = {
  airline: `Alitalia`,
  fligthCode: `AL`,
  bookings: [],
};

// trying to call method
lufthansa.book(463, `Alexander Smith`); // Alexander Smith booked a seat on Lufthansa flight LH463
lufthansa.book(723, `Sara Cattaneo`); // Sara Cattaneo booked a seat on Lufthansa flight LH723

console.log(lufthansa.bookings);
// OUTPUT: [
//    {flight: 'LH463', name: 'Alexander Smith'},
//    {flight: 'LH723', name: 'Sara Cattaneo'}
//  ]

////////////////////////////////////////////////////////

// taking method and store it in an external function
const bookFlight = lufthansa.book;

//    PROBLEM
// bookFlight(234, `John Chan`);
// Uncaught TypeError: Cannot read properties of undefined (reading 'airline')
// now bookFlight() is not more a method but it's a regular function call,
// so the this keyword points to undefined (at least in strict mode)

//    TO FIX THIS PROBLEM WITH CALL()
// you can you use:   function.call(object_point_this, all_other_arguments)
bookFlight.call(alitalia, 463, `Marco Rossi`); // Marco Rossi booked a seat on Alitalia flight AL463
bookFlight.call(lufthansa, 732, `Anna Rich`); // Anna Rich booked a seat on Lufthansa flight LH732

//    APPLY ()
const argArray = [426, `Jonas Sils`];
bookFlight.apply(alitalia, argArray); // Jonas Sils booked a seat on Alitalia flight AL426

//    modern way using spread operator
bookFlight.call(lufthansa, ...argArray); // Jonas Sils booked a seat on Lufthansa flight LH426
