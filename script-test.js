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

  registerNewAnswer() {
    // string of options
    let optionsStr = "";

    // add all options to the string of options
    for (const option of this.options) {
      optionsStr += `${option} + \n`;
    }

    // get user's choice
    while (this.isInputWrong) {
      const userAnswer = prompt(`What is your favourite programming language?
      
      ${optionsStr}
      (Write option number)`);

      // check if
      if (
        typeof Number(userAnswer) === `number` &&
        Number(userAnswer).length === poll.options.length
      ) {
        this.isInputWrong = false;
        console.log(userAnswer.length);
        console.log(this.isInputWrong);
      }
    }
  },
};
poll.registerNewAnswer();
