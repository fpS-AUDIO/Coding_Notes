"use strict";

// these method are not changging the immutable primitive strings!
// Also these methods always return a new string

const airLine = `TAP Air Milan`;
const airPlane = `A420`;

// you can access the index of a string
console.log(airPlane[0]); // A

// you can calculate the string length (not 0 based)
console.log(airPlane.length); // 4

// you can obtain an index of first coincidence (included)
console.log(airLine.indexOf(`Air`)); // 4

// you can obtain an index of last coincidence (included)
console.log(airLine.lastIndexOf(`i`)); // 9

// slice(start, end)  you can extract part of strings (substring)
// index of end is NOT included (start yes)
// (!)  the length of substring is always endIndex - startIndex
console.log(airLine.slice(4, 9)); // Air M

// start counting from the end by using negative index of begining counter
// so the number of negative index is also the length of how many last characters are catched
console.log(airLine.slice(-3)); // lan

/////// example of extracting the first word ///////
console.log(airLine.slice(0, airLine.indexOf(` `))); // TAP

/////// example of extracting the last word ///////
console.log(airLine.slice(airLine.lastIndexOf(` `) + 1)); // Milan

////////////////////////////////////////////////////////
console.log(`//////////////// PART 2 ////////////////`);
////////////////////////////////////////////////////////

// you can transform all the string to lowercase or uppercase
console.log(airLine.toLowerCase()); // tap air milan
console.log(airLine.toUpperCase()); // TAP AIR MILAN

// replace(stringToBeReplaced, newString) to change ONLY 1st coincidence parts of strings
const priceEU = `218,26€`;
const priceUS = priceEU.replace(`€`, `$`).replace(`,`, `.`);
console.log(priceUS); // 218.26$

// replaceAll(stringToBeReplaced, newString) to change ALL coincidences
console.log(`2222`.replaceAll(`2`, `3`)); // 3333
// we could use old way with regular expressions
console.log(`11111`.replace(/1/g, `3`)); // 33333

// includes() boolean check if there is a string inside
const plane = `Boeing 737 MAX`;
console.log(plane.includes(`737`)); // true

// startsWith() boolean check if string starts with that string parameter
console.log(plane.startsWith(`Boeing`)); // true

// endsWith() boolean check if string ends with that string parameter
console.log(plane.endsWith(`MAX`)); // true

/////// example of fixing the capitalization in a name ///////
const passenger = `aLeXaNder`;
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Alexander

/////// example of comparing an input mail to the correct mail ///////
const correctMail = `hello@gmail.com`;
const inputMail = `    Hello@GMail.com   \n`;
// trim() deletes spaces around (also trim can be only start or only end)
const normalizedMail = inputMail.toLowerCase().trim();

////////////////////////////////////////////////////////
console.log(`//////////////// PART 3 ////////////////`);
////////////////////////////////////////////////////////

// split()  split a string in multiple parts based on a divider string
// and it will then store the results into elements of a new array
console.log(`I'm+so+cool`.split(`+`)); // ["I'm", 'so', 'cool']

// join() join the elements of an array in a string and place parameter string between them
console.log([`Mr.`, `Alexander`, `Hamilton`].join(` `)); // Mr. Alexander Hamilton

// (!)  padding strings = adding characters to obtain desidered length
const testMessage = `hello`;

// padStart(totalLength, strToAdd)  adds given string to to the start until we get the desidered length
console.log(testMessage.padStart(10, `-`)); // -----hello

// padEnd(totalLength, strToAdd)    adds given string to to the end until we get the desidered length
console.log(testMessage.padEnd(10, `-`)); // hello-----

// (!)  you can chain the methods padStart() and padEnd()
console.log(testMessage.padStart(10, `-`).padEnd(15, `-`)); // -----hello-----

/////// example of function which capitalize given names ///////
const capitalizeName = function (nameStr) {
  const nameStrLower = nameStr.toLowerCase();
  const names = nameStrLower.split(` `);
  const namesCapitalized = [];
  for (const word of names) {
    namesCapitalized.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesCapitalized.join(` `));
};
capitalizeName(`alex ivanov`);
capitalizeName(`aLex ivANov`);
capitalizeName(`Alex Ivanov`);

/////// example of function which masking a piece of credit card number ///////
