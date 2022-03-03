'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT!';
    }
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Matt';
calcAge(1992);
*/

/*
// Variables hoisting
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Matt';
let job = 'teacher';
const year = 1992;

// Functions hoisting
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

// Function declaration
function addDecl(a, b) {
  return a + b;
}

// Function expression
const addExpr = function (a, b) {
  return a + b;
};

// Arrow function
var addArrow = (a, b) => a + b;

// Example of hoisting trap
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
console.log(this); // Global - Window

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1992);

// Lexical this keyword
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // Window
};
calcAgeArrow(1990);

const matt = {
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
matt.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = matt.calcAge;
matilda.calcAge();
// this keyword is always pointing to the object calling the method

const f = matt.calcAge;
f(); // Regular function call, not attached to any object - no owner
*/

/*

// var firstName = 'Matilda';

const matt = {
  firstName: 'Matt',
  year: 1992,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial(); // regular function call has the this keyword set to undefined
  },

  greet: () => console.log(`Hey ${this.firstName}`),
}; // Never use arrow function as method

matt.greet();
// console.log(this.firstName);
matt.calcAge();

// Arguments keywords
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
// arguments keyword only exists in regular function expression and declaration and not in an arrow function

*/

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Matt',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // Only works at first level - doesn't work on objects within objects. Shallow copy.
jessicaCopy.lastName = 'Davis';
console.log(jessica2);
console.log(jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(jessica2);
console.log(jessicaCopy);
