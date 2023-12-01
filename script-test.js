"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
//// array.push() and array.pop() methods in JavaScript ////
////////////////////////////////////////////////////////////
// Coding Note #50

// ------------------------------------------------------- //

// SYNTAX:        array.push(element)
// The array's push() method adds new elements to the end of an array
// Additionally, this method returns the new length of the array
// Note: This method mutates the original array

// Declare an array containing the ingredients of a pizza
const pizzaIngredients = [`tomato`, `mozzarella`, `olive oil`];

// Adding a new ingredient to the end of the array
const ingredientsLength = pizzaIngredients.push(`spinach`);

// Log the new length of the array and the updated array
console.log(ingredientsLength); // 4 (the new length of the array)
console.log(pizzaIngredients); // ['tomato', 'mozzarella', 'olive oil', 'spinach']

// ------------------------------------------------------- //

// SYNTAX:        array.pop()
// The array's pop() method removes the last element of an array
// Additionally, this method returns the popped element
// Note: This method mutates the original array

// Remove the last ingredient from the array
const lastIngredient = pizzaIngredients.pop();

// Log the popped element and the updated array
console.log(lastIngredient); // spinach
console.log(pizzaIngredients); // ['tomato', 'mozzarella', 'olive oil']

// Follow @coding_feature on Instagram for more content! 👍

//////////////////////////////////////////////////////
console.log(`---------------NEW STAFF---------------`);
//////////////////////////////////////////////////////
