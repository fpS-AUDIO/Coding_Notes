"use strict";

////////////////////////////////////////////////////////////////////
//// OOP - inheritance with Constructor functions in JavaScript ////
////////////////////////////////////////////////////////////////////
// Coding Note #66

/*  Steps to manipulate the prototype chain manually:
 -  Below we have created the `Person` class as the parent class and `Student` as the child class.
 -  Usually, the child class accepts the same arguments (firstName, birthYear) plus some additional ones (study).
 -  Inside the child class, you need to call the parent function, but if you call it as a regular function call,
    without the `new` operator, the `this` keyword will be set to undefined.
    To solve this, you need to manually set the `this` keyword using the call() method.
    EXAMPLE: Person.call(this, firstName, birthYear);
 -  Right after defining the child class, you need to link the prototype objects using Object.create().
    This is to achieve inheritance and not just point to the SAME object like: Student.prototype = Person.prototype;
    EXAMPLE: Student.prototype = Object.create(Person.prototype);
    NOTE:   You need to create this connection before defining the methods on the prototype object
            of the child class (Student) because Object.create() will return an empty object, so
            if you define methods before this point, Object.create() will overwrite these methods.
 -  `childClass.prototype.constructor` should point to the `childClass`, 
    but since we manually set the prototype property of `childClass` (Student) using Object.create(),
    the constructor of childClass (Student) is still parentClass (Person).
    You need to fix this because sometimes it's important to rely on this constructor property.
    It's easy to do: childClass.prototype.constructor = childClass;
    EXAMPLE: Student.prototype.constructor = Student;
*/

// Define the Person class
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Define a method on Person.prototype
Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthYear;
};

// Define the Student class
const Student = function (firstName, birthYear, study) {
  // Manually set the `this` keyword to the new object when using `new`
  Person.call(this, firstName, birthYear);
  this.study = study;
};

// After defining the child class, make the prototype connection for inheritance
Student.prototype = Object.create(Person.prototype);

// Adjust the constructor of Student
Student.prototype.constructor = Student;

// Define a method on Student.prototype
Student.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.firstName} and I study ${this.study}`);
};

// Example usage:
const student = new Student("John", 2000, "Computer Science");
console.log(student.calcAge()); // Calculates the age based on the birth year
student.sayHello(); // Outputs: Hello, my name is John and I study Computer Science

//////////////////////////////////////////////////////////
//// OOP - inheritance with ES6 Classes in JavaScript ////
//////////////////////////////////////////////////////////
// Coding Note #67

//////////////////////////////////////////////////////////////
//// OOP - inheritance with Object.create() in JavaScript ////
//////////////////////////////////////////////////////////////
// Coding Note #68
