"use strict";

const flight = `MLN123`;
const Alex = {
  name: `Alex Smitt`,
  passport: 123456789,
};

const checkIn = function (fligntNumber, passenger) {
  fligntNumber = `MLN999`;
  passenger.name = `Mr.` + passenger.name;
};

checkIn(flight, Alex);
console.log(flight); // didn't changed
console.log(Alex); // name is changed:  name: 'Mr.Alex Smitt'
