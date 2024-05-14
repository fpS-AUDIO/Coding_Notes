"use strict";

////////////////////////////////////////////////////////////////////
//// OOP - inheritance with Constructor functions in JavaScript ////
////////////////////////////////////////////////////////////////////
// Coding Note #66

/*  Steps to manipulate the prototype chain manually:
 -  Below we have created `Person` class as parent class and `Student` as child class
 -  Usually the child class accepts same arguments (firstName, berthYear ) + some additional (study)
 -  Inside the child class you need to call the parent function, but if you call it as a regular function call,
    so without the `new` operator, the `this` keyword will be set to undefined.
    To solve this, you need to manually set the `this` keyword using call() method
    EXAMPLE: Person.call(this, firstName, berthYear);
  - Right after defining the child class you need to link the connection of prototype objects using Object.create()
    So you need make inheritance and NOT just poiniting to the SAME object like: Student.prototype = Person.prototype;
    EXAMPLE: Student.prototype = Object.create(Person.prototype);
    NOTE:   you need to create this connection before defining the methods of prototype object
            of child class (Student) because Object.create() will return an empty object, so
            if you defined methods before this point Object.create() will overwrite these methods.
 -  `childClass.prototype.constructor` should point on the same `childClass`, 
    but since we manually set the prototype property of `childClass` (Student) using Object.create()
    now the constructor childClass (Student) is still parentClass (Person).
    You need to fix this because sometimes it's important to rely on this constructor property.
    It's easy to do: childClass.prototype.constructor = childClass;
    EXAMPLE: Student.prototype.constructor = Student;
*/

// define the Person class
const Person = function (firstName, berthYear) {
  this.firstName = firstName;
  this.berthYear = berthYear;
};

// also define method of Person.prototype
Person.prototype.calcAge = function () {
  return 2024 - this.berthYear;
};

// define Student class
const Student = function (firstName, berthYear, study) {
  // manually setting the `this` keyword to `this` which will be the new object when will use `new`
  Person.call(this, firstName, berthYear);
  this.study = study;
};

// after defining the child class make the prototype connection inheritance
Student.prototype = Object.create(Person.prototype);

// adjust the constructor of Student
Student.prototype.constructor = Student;

// define method of Student.prototype
Student.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.firstName} and I study ${this.study}`);
};

//////////////////////////////////////////////////////////
//// OOP - inheritance with ES6 Classes in JavaScript ////
//////////////////////////////////////////////////////////
// Coding Note #67

//////////////////////////////////////////////////////////////
//// OOP - inheritance with Object.create() in JavaScript ////
//////////////////////////////////////////////////////////////
// Coding Note #68
