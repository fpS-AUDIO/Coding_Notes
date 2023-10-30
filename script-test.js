"use strict";

//////////////////////////////////////////////////////
console.log(`---------------CHALLENGE---------------`);
//////////////////////////////////////////////////////

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.


Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  isInputWrong: true,

  displayResults(type) {
    console.log(`Poll results are: ${type}`);
  },

  registerNewAnswer() {
    // string of options
    let optionsStr = `\n`;

    // add all options to the string of options
    for (const option of this.options) {
      optionsStr += `${option} \n`;
    }

    // get user's choice until the input is correct
    while (this.isInputWrong) {
      const userAnswer = prompt(`
      ${this.question}
      ${optionsStr}
      (Write option number)`);

      // check if input is correct
      if (
        typeof Number(userAnswer) === `number` &&
        Number(userAnswer) < this.options.length &&
        Number(userAnswer) >= 0
      ) {
        // if input is correct do this:
        this.answers[userAnswer]++;
        this.displayResults.call(poll, this.answers);
        break;
      } // if input is wrong do this:
      else
        alert(`Something went wrong with your input: ${userAnswer} \n
        Please try againg writing only a number of the correct line.`);
    }
  },
};
document
  .getElementById(`btn1`)
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));

//////////////////////////////////////////////////////
console.log(`---------------NEW STUFF---------------`);
//////////////////////////////////////////////////////

// closure
const secureCounting = function () {
  let person = 0;

  return function () {
    person++;
    console.log(person);
  };
};

const addPerson = secureCounting();
addPerson(); // 1
addPerson(); // 2
addPerson(); // 3

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

///////////////////////////////////////
//// Looping Objects in JavaScript ////
///////////////////////////////////////
// Coding Note #31

// In JavaScript, objects are not iterable by default, which means you can't use traditional loops like 'for...of' with them.
// However, you can loop over objects in an indirect way using various methods provided by the Object class.

//----Test data for the example below----//
const fruitObject = {
  apple: {
    color: "red",
    taste: "sweet",
  },
  banana: {
    color: "yellow",
    taste: "creamy",
  },
  orange: {
    color: "orange",
    taste: "citrusy",
  },
};
//-----------------------------------//

// Object.keys(object)  ->  returns an array with keys of the object
console.log(Object.keys(fruitObject)); // ['apple', 'banana', 'orange']

// Object.values(object)  ->  returns an array of values for each key in the object
console.log(Object.values(fruitObject));
// [{color: 'red', taste: 'sweet'}, {color: 'yellow', taste: 'creamy'}, {color: 'orange', taste: 'citrusy'}]

// Object.entries(object) ->  returns an array of arrays with [key, value] pairs,
// where the value is an object for each key
console.log(Object.entries(fruitObject)); // [['apple', {…}], ['banana', {…}], ['orange', {…}]]

// EXAMPLE of looping
const fruitEntries = Object.entries(fruitObject);
console.log(fruitEntries);
// Destructuring twice: first [key, value], then [key, { color, taste }] with exact property names
for (const [key, { color, taste }] of fruitEntries) {
  console.log(`The ${key} has the ${color} color and ${taste} taste.`);
}
// The apple has the red color and sweet taste. etc...

// Follow @coding_feature on Instagram for more content! 👍
