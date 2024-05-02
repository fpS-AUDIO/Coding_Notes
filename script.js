"use strict";

/////////////////////////////////////
//// Basics of OPP in JavaScript ////
/////////////////////////////////////
// Coding Note #58

/* ------ OOP Basics:
    - Is a programming paradigm based on the concept of objects, which model real-world or abstract entities.
    - Objects contain data (properties) and functions (methods), packaging data and its behavior into a single unit.
    - Objects are self-contained blocks of code, serving as building blocks of applications.
    - These objects can interact through a public interface (API) by exposing methods.
    - OOP aims to organize code for easier and more flexible maintenance.
*/

/* ------ Fundamental Principles of OOP:
 1. Abstraction:    Ignoring or hiding irrelevant details to gain an overview of the system.
 2. Encapsulation:  Keeping properties and methods private within the class, exposing only essential methods via an API.
 3. Inheritance:    Allowing a child class to inherit properties and methods from a parent class, establishing a hierarchy.
 4. Polymorphism:   Enabling child classes to override inherited properties and methods, allowing multiple behaviors.
*/

/* ------ OOP in JavaScript:
 - Objects are linked (not copied) to a prototype object, sharing its properties and methods.
 - This is called prototypal inheritance (delegation).
 - This contrasts with classic OOP inheritance where classes inherit methods by copying.
 - Instantiation is a process of Creating a child objects from a parent class or prototype.
*/

/* ------ There are 3 ways of implement prototypal inheritance in JS:
 1. Constructor functions:
    - Create objects from a function, used for built-in objects like Arrays and Maps.
 2. ES6 Classes:
    - A modern syntax for defining classes, though they work like constructor functions under the hood.
 3. Object.create():
    - Links an object to a prototype object, offering a simple, though less used, solution.
*/

// Follow @coding_feature on Instagram for more content! 👍
