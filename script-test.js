"use strict";

//////////////////////////////////////////////////////
console.log(`---------------NEW STUFF---------------`);
//////////////////////////////////////////////////////

// bind() is similar to the call() method but it doesn't immediately call the function
// it returns a new function where the "this" keyword is bound (set to the correct value)

/////////////////// data for example below ///////////////////
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
///////////////////////////////////////////////////////////////

const bookFlight = lufthansa.book;

const bookAlitalia = bookFlight.bind(alitalia);
bookAlitalia(329, `Alessia`); // Alessia booked a seat on Alitalia flight AL329
