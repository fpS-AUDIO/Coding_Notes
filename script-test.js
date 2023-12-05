"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////
//// Other Array Methods in JavaScript part 1 ////
//////////////////////////////////////////////////
// Coding Note #54

const yourArray = [1, 2, 3, 4, 5, 6, 7];

// array.at(index)    return the element at given index without mutating it
console.log(yourArray.at(3)); // 4

// array.concat(array)    return new concatenated array without mutating the original one
console.log(yourArray.concat([8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// array.join(str)    return a string by joinining all elements of array with given stri// array.join(str)    return a string by joining all elements of the array with the given string (no mutation)
// Note: If the separator is not provided, elements are separated by commas.
console.log(yourArray.join(`--`)); // "1--2--3--4--5--6--7"

// Array.isArray(value)    return true if the given value is an array
console.log(Array.isArray(yourArray)); // true

// array.includes(element)    return true if the array contains the given element
console.log(yourArray.includes(7)); // true

// array.toString()    convert the array into a string and return it without mutating the original array
console.log(yourArray.toString()); // "1,2,3,4,5,6,7"

// array.copyWithin(target, start, end) copies elements from one position to another in the given array
// `target` -> index position to copy the elements to
// `start`  -> index position to start copying elements from (optional, default is 0)
// `end`    -> index position (not included) to stop copying elements from (If omitted, it will copy until the last index)
// so it mutates the original array but it doesn't change the length property
console.log(yourArray.copyWithin(4, 1, 3)); // [1, 2, 3, 4, 2, 3, 7]

// array.toReversed()    return new reversed array with the elements in reversed order (no mutation)
console.log(yourArray.toReversed()); // [7, 3, 2, 4, 3, 2, 1]

// array.reverse()    reverse the order of elements in the array by mutating it
// Note: This method returns a reference to the same array.
console.log(yourArray.reverse()); // [7, 3, 2, 4, 3, 2, 1]

// Follow @coding_feature on Instagram for more content! 👍
