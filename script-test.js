"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////
//// Maps in JavaScript  ////
//////////////////////////////////////////////////
// Coding Note #55

// Maps were introduced in ES6 and they are similar to the objects with key-value pair.
// The big difference is that the keys  of objects can be string type only, while maps can hold any data type in keys.

// Map is a data structure that you can use to map values to keys like objects.
// But, unlike objects, keys of maps can have any type (indeed also values).
// Meanwhile the keys of objects are always strings.



// --------------------------------------------
//     new Map()    -> create a map

// const restaurant = new Map();


// --------------------------------------------
//     set(key, value)    -> add elements and return the updated map

// restaurant.set(`name`, `La Cascata`);
// restaurant.set(1, `Sondrio, via ....`);
// restaurant.set(2, `Berbenno, via ....`);
// console.log(restaurant);


// (!) since set() method returns the updated map you can chain the set() method

// restaurant
//   .set(`food`, ["salat", "Pizza", "Carbonara", "Risotto", "Lasagna"])
//   .set(`open`, 11)
//   .set(`close`, 23)
//   .set(true, `We're opened!`)
//   .set(false, `We're closed!`);


// --------------------------------------------
//     get(key)    -> read data from the map

// console.log(restaurant.get(`close`));


// EXAMPLE:

// const timeNow = 21;
// // restaurant.get(TRUE or FALSE)
// console.log(
//   restaurant.get(
//     timeNow > restaurant.get(`open`) && timeNow < restaurant.get(`close`)
//   )
// );
// // output: "We're opened!"


// --------------------------------------------
//     has(key)    -> check if the map contains a certain key (retunr true/false)

// console.log(restaurant.has(`food`));


// --------------------------------------------
//     delete(key) -> delete elements from the map

// restaurant.delete(2);
// console.log(restaurant);


// --------------------------------------------
//     .size property   -> returns integer of items in map

// console.log(restaurant.size);


// --------------------------------------------
//     clear()  -> remove all elements from the map

// restaurant.clear();



// --------------------------------------------
//     PROBLEM and SOLUTION

// restaurant.set([1, 2], `test`);
// console.log(restaurant.get([1, 2]));
// // output: undefined

// (!) we got undefined because these two arrays [1, 2] are actually NOT the same object in the heap
//     to obtain the value we must insert the exact same object (key) in memory
//     to make it work we need to put the array in the variable and use the variable in both places:


// const arrayX = [1, 2];
// restaurant.set(arrayX, `test`);
// console.log(restaurant.get(arrayX));
// // output: "test"


// --------------------------------------------
// (!) since we can use object as key we can use it in DOM elements

// restaurant.set(document.querySelector(`h1`), `Heading`);
// console.log(restaurant);


// --------------------------------------------
//     second method to create a map is to create an array witch contains multiple arrays with key:value

// // const mapName = new Map([[key, value], [key, value]])
// const question = new Map([
//   [`question`, `What is the best language in the world?`],
//   [1, `C++`],
//   [2, `Ruby`],
//   [3, `Python`],
//   [4, `JavaScript`],
//   [`correct`, 4],
//   [true, `Congrats!`],
//   [false, `Try again...`],
// ]);


// --------------------------------------------
// // object example for data below
// const openingHoursObject = {
//   thu: {
//     open: 12,
//     close: 22,
//   },

//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   },
// };
// --------------------------------------------

// (!) array of arrays is exactly the same array structure that is returned from Object.entries(object)
//     so we can convert objects to maps

// const openingHoursMap = new Map(Object.entries(openingHoursObject));


//     convert a map to an array -> get array of arrays

// console.log([...question]);

// // we also have the same methods of arrays:
// console.log([...question.keys()]);
// console.log([...question.values()]);



// /////////////////////////////////


// // ---EXAMPLE TO USE THE MAP---

// console.log(question.get(`question`));

// // since maps are iterables we can loop them
// for (const [key, value] of question) {
//   if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
// }

// // suppose the answer is got from prompt()
// const answer = 4;
// console.log(question.get(answer === question.get(`correct`)));




// Follow @coding_feature on Instagram for more content! 👍
