"use strict";

/////////////////////////////////////
//// localStorage API JavaScript ////
/////////////////////////////////////
// Coding Note #57

/**
 * The Local Storage API enables web applications to store and retrieve data on a user's browser independently of the server session.
 * Data stored is bound to the origin, which comprises the protocol, domain, and port, ensuring data isolation across different origins.
 * Unlike cookies, Local Storage data is not included with every HTTP request, which enhances web application performance by reducing server load.
 * Data persists across browser sessions and tabs as long as they share the same origin, allowing for consistent user experiences even after browser restarts.
 * Local Storage stores all keys and values as strings, necessitating the conversion of non-string data using methods like JSON.stringify() and JSON.parse().
 */

// ---------------------------------------------------------------------------------------- //
// --- Methods and Attributes ---

// Setting an item (stores the value 'pizza margherita' under the key 'myDish')
localStorage.setItem("myDish", "pizza margherita");

// Getting an item (retrieves the value stored under 'myDish')
const dish = localStorage.getItem("myDish"); // Outputs: 'pizza margherita'

// Removing an item (removes the item stored under the key 'myDish')
localStorage.removeItem("myDish");

// Clearing all storage (clears all data stored in Local Storage for the current origin)
localStorage.clear();

// Length property (returns the number of key/value pairs currently present in the Local Storage)
const numberOfItems = localStorage.length;

// Key function (retrieves the name of the nth key in the storage)
const firstKeyName = localStorage.key(0);

// ---------------------------------------------------------------------------------------- //
// --- Best Practices and Important Notes ---

/**
 * Ensure exception handling for cases where Local Storage may not be available, such as in private browsing modes or when storage limits are exceeded.
 * Be aware that Local Storage operations are synchronous and can block the main thread; excessive use can degrade performance, particularly with large data volumes.
 * To manage non-string data, utilize JSON.stringify() to serialize before storage and JSON.parse() to deserialize upon retrieval.
 */

// Example: Storing and retrieving an object
const myDish = { name: "pizza margherita", type: "pizza", country: "Italy" };
localStorage.setItem("myDish", JSON.stringify(myDish)); // Storing an object as a string

const storedDish = JSON.parse(localStorage.getItem("myDish")); // Retrieving the object

// Handling exceptions
try {
  localStorage.setItem("item", "value");
} catch (e) {
  console.error("Error saving to localStorage", e);
}

/**
 * Local Storage provides approximately 5MB of storage per origin, but this limit can vary between browsers.
 * It's accessible to any script loaded on the page; avoid storing sensitive or personal information that could be exposed in XSS attacks.
 * Sanitize and validate all inputs from untrusted sources to mitigate potential security risks.
 */

// Follow @coding_feature on Instagram for more content! 👍
