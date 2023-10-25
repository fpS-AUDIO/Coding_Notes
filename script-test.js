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

// You can create a function which will be executed once and then it'll dissapear.
// you need to make JS thinks it's an expression by wrapping function iside () and call it
// all data iside a scope is private (encapsulated data)
// so IIFE helps hide variables inside a local scope

// function expression
(function () {
  console.log(`This funtion runs once!`);
})();

// arrow function
(() => console.log(`Also this funtion runs once!`))();

// Variables declared with let or const create their own scope inside a block.
{
  const isPrivate = 28;
}
// console.log(isPrivate); // Uncaught ReferenceError: isPrivate is not defined
// the modern solutions prefer using this block without creating functions.
// since we can create a scope just using {}

//////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
//////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
//// String Methods and Attributes in JavaScript Part 1 ////
////////////////////////////////////////////////////////////
// Coding Note #28

// Strings are primitive data types, but thanks to "Boxing," you can apply methods to them.
// Boxing means putting a string into an object (box) with the same content.
// After all operations, the object is converted back to a regular string.
// So, all string methods return a new string (primitive) without changing the original one.
// A substring is just a part of a string.

console.log(new String("Alex"));
// OUTPUT: String {'Alex'} <- an object with a string and all attributes, including methods

///// Test String for Example Below /////
const phrase = "heLLo World";
/////////////////////////////////////////

// Access the index of a string
console.log(phrase[1]); // 'e'

// Obtain the index of the first occurrence (inclusive)
console.log(phrase.indexOf("Wor")); // 7

// Obtain the index of the last occurrence (inclusive)
console.log(phrase.lastIndexOf("o")); // 8

// Calculate the string length (not 0-based)
console.log(phrase.length); // 12

// slice(start, end) returns a substring (start is included, and end is not)
console.log(phrase.slice(3, 5)); // 'Lo'

// Use a negative index to calculate from the end
console.log(phrase.slice(-5)); // 'World'

// Example of extracting the last word
console.log(phrase.slice(phrase.lastIndexOf(" ") + 1)); // 'World'

/////////////////////////////////////////////

// toUpperCase() transforms the string to uppercase
console.log(phrase.toUpperCase()); // 'HELLO WORLD'

// toLowerCase() transforms the string to lowercase
console.log(phrase.toLowerCase()); // 'hello world'

// replace(stringToBeReplaced, newString) changes ONLY the first occurrence of the substring
const phrase2 = phrase.replace("World", "Everybody");
console.log(phrase2); // 'heLLo Everybody'

// replaceAll(stringToBeReplaced, newString) is like replace() but changes ALL occurrences
const phrase3 = phrase.replaceAll("o", "A");
console.log(phrase3); // 'heLLAw WArld'

// includes() checks if a string is inside the original string (returns a boolean)
console.log(phrase.includes("heLLo")); // true

// startsWith() checks if the string starts with a specified parameter (returns a boolean)
console.log(phrase.startsWith("heL")); // true

// endsWith() checks if the string ends with a specified parameter (returns a boolean)
console.log(phrase.endsWith("guys")); // false

/////////////////////////////////////////////

// split(dividerStr) returns an array containing all parts of the string split based on dividerStr
console.log(phrase.split(" ")); // ['heLLo', 'World']

// join(parameterStr) returns a string by joining elements of an array and using the parameter string between them
console.log(["heLLo", "World"].join(" ")); // 'heLLo World'

// repeat(times) allows you to repeat a string multiple times
console.log(phrase.repeat(3)); // 'heLLo WorldheLLo WorldheLLo World'

// padStart(totalLength, strToAdd) adds a given string to the start to reach the desired length
console.log(phrase.padStart(15, "-")); // '---heLLo World'

// padEnd(totalLength, strToAdd) adds a given string to the end to reach the desired length
console.log(phrase.padEnd(15, "-")); // 'heLLo World---'

// You can chain the methods padStart() and padEnd()
console.log(phrase.padStart(15, "-").padEnd(18, "-")); // '---heLLo World---'

/* 

String Methods (Additional):

    charAt(index): Returns the character at the specified index.
    charCodeAt(index): Returns the Unicode value of the character at the specified index.
    codePointAt(index): Returns the Unicode code point of the character at the specified index.
    concat(str1, str2, ...strN): Combines two or more strings and returns a new string.
    startsWith(searchString, position): Checks if the string starts with a specified substring.
    endsWith(searchString, position): Checks if the string ends with a specified substring.
    trim(): Removes whitespace from both ends of the string.
    trimStart() or trimLeft(): Removes whitespace from the start of the string.
    trimEnd() or trimRight(): Removes whitespace from the end of the string.
    substring(startIndex, endIndex): Returns a substring between the specified indices.
    toLocaleUpperCase() and toLocaleLowerCase(): Converts the string to uppercase or lowercase according to the host's current locale.

String Iteration: Strings are iterable, and you can use iteration methods such as for...of, forEach, or the spread operator to loop through characters in a string.

javascript

const str = 'Hello';
for (const char of str) {
    console.log(char);
}

String Escapes: JavaScript uses escape sequences to represent special characters within strings. Common escape sequences include \n (newline), \t (tab), and \\ (a literal backslash).

Regular Expressions: JavaScript provides powerful support for pattern matching and manipulation of strings through regular expressions. You can use methods like match(), search(), replace(), and split() with regular expressions.

String Encoding: JavaScript has functions like encodeURIComponent() and decodeURIComponent() for handling URL encoding, and btoa() and atob() for base64 encoding and decoding.

String Localization: JavaScript provides methods for string localization and internationalization, like Intl.Collator and Intl.DateTimeFormat.

String.prototype Property: Many string methods are available through the String.prototype property. For example, String.prototype.includes() and String.prototype.slice().

String Concatenation: While you can use + for string concatenation, consider using an array and Array.prototype.join() for improved performance when concatenating multiple strings.

*/
