"use strict";

/////////////////////////////////////////////////////////////////
console.log(`---------------For @coding_feature---------------`);
/////////////////////////////////////////////////////////////////

/////////////////////////////////////
//// bind() Method in JavaScript ////
/////////////////////////////////////
// Coding Note #34

// The bind() method in JavaScript is similar to the call() method, but it doesn't immediately call the function.
// Instead, it returns a new function where the "this" keyword is bound (set to the correct value).
// Additionally, you can bind the parameters in the correct order; this is known as partial application.
// Partial application means that a part of the arguments of the original function is already set.
// If you don't need to specify "this," you can pass "null" as the first argument.

// ------------- Data for the example below ------------- //

const currencyAlfa = {
  history: [],
  formatCurrency(currencySymbol, value) {
    const result = `${currencySymbol}${value.toFixed(2)}`;
    this.history.push(result);
    console.log(result);
  },
};
const currencyBeta = {
  history: [],
};

// ------------------------------------------------------ //

// Returning a new function (not calling) where the "this" keyword is bound to "currencyBeta"
const formatCurrencyBeta = currencyAlfa.formatCurrency.bind(currencyBeta);
formatCurrencyBeta(`$`, 99); // $99.00

// Create a partially applied function where the "this" argument is "null" since "formatCurrencyBeta" already has its own "this keyword"
// and the first parameter is bound to "€"
const formatCurrencyBetaEuro = formatCurrencyBeta.bind(null, `€`);
formatCurrencyBetaEuro(22); // €22.00

// Follow @coding_feature on Instagram for more content! 👍

//////////////////////////////////////////////////////
console.log(`---------------NEW STUFF---------------`);
//////////////////////////////////////////////////////

//////////////////////////////////////////
//  forEach() method with Maps and Sets //
//////////////////////////////////////////

// forEach() also works with maps and sets

// -------------- WITH MAPS -------------- //
const currencies = new Map([
  [`USD`, `United States Dollar`],
  [`EUR`, `Euro`],
  [`GBP`, `Pound Sterling`],
]);

// forEach(value, key, map)
currencies.forEach(function (value, key) {
  console.log(`${key} is the ${value}`);
});
//    OUTPUT: USD is the United States Dollar   etc...

// -------------- WITH SETS -------------- //

const currencyUnique = new Set([`Euro`, `USD`, `Euro`, `GBP`, `Euro`, `GBP`]);

// forEach(value, _, map)
currencyUnique.forEach(function (value, _, set) {
  console.log(`${value} is the ${value}`);
});
//    OUTPUT: Euro is the Euro   etc...

// (!)  underscore (_) passed as argument means a throwaway variable in JS (unnecessary variable)
