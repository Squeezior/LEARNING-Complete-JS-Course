'use strict';

/*
/////////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000); // we can skip the argument using undefined. Setting it to undefined is same as not setting it at all.
*/

/*
/////////////////////////////////////////
// How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const matt = {
  name: 'Matt Kowalski',
  passport: 24738238721,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24738238721) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, matt);
// console.log(flight);
// console.log(matt);

// // Is same as doing...
// const flightNum = flight; // value on the call stack is copied
// const passenger = matt; // we copy just the reference to the object in memory heap, they both point to the same object now, so we can manipulate passenger and it'll actually manipulate matt object.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(matt);
checkIn(flight, matt);
// JS does not have pass by reference, it's always by value
// pass by reference in JS is just passing the value of memory address, we pass the reference to the function, not BY function.
*/

/*
/////////////////////////////////////////
// First-Class and Higher-Order functions

// Functions are simply values
// functions are another type of objects in JS, since objects are values, functions are values too.
// And since functions are values there are a bunch of interesting things we can do with functions, like storing them in variables, or object properties.
// There are function methods, since functions are objects.

// Higher order functions:

// Function that receives another function
// const greet = () => console.log('Hey Matt');
// btnClose.addEventListener('click', greet);
// greet function is a Callback function

// Function that returns new function:
// function count() {
//   let counter = 0;
//   return function () {
//     counter++;
//   };
// }

// First-Class functions is just a feature that a programming language either has or not. It just means that all functions are values and that's it. There are no First-Class functions in practice.
// There ARE Higher-Order functions in practice.
*/

/*
/////////////////////////////////////////
// Functions accepting Callback functions

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord); // transformer function will CALL the upperFirstWord function
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Matt', 'Martha', 'Adam'].forEach(high5);

const exponentiation = function (number) {
  return Math.pow(number, 2);
};

const calcTip = function (number) {
  return number * 0.15;
};

const calculations = function (number, fn) {
  console.log(fn(number));
};

calculations(10, exponentiation);
*/

/*
/////////////////////////////////////////
// Functions returning functions

const greet = function (greeting) {
  return function (name) {
    // closure
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Matt');
greeterHey('Steven');

greet('Hello')('Matt');

// Challenge

const greetArr = greeting => name2 => console.log(`${greeting} ${name2}`);

greetArr('Hola')('Juan');
*/

/*
/////////////////////////////////////////
// The Call and Apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {},
  book(flightNum, name) {
    // enhanced object literal syntax
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}` }, name);
  },
};

lufthansa.book(239, 'Matt Kowalski');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Williams'); does NOT work
// book function is just a regular function call, in a regular function call this keyword points to undefined in strict mode
// book function is no longer a method from lufthansa, it's a copy of lufthansa.book, but it's not a method anymore, it's a function, that's why this keyword will point to undefined.
// We need to tell JS explicitly what the this keyword should point to.
// There are three function methods to do that:
// -call
// -apply
// -bind

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // not that used in modern JS
console.log(swiss);

book.call(swiss, ...flightData); // call with spread is the same as apply

// The Bind method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); // Partial application - part of the argument of the original function is already applied - already set.
bookEW23('Matt Kowalski');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addVAT = value => value + value * 0.23;
console.log(addVAT(200));
console.log(addVAT(40));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
    // console.log(
    //   `The value is ${value}, the rate is ${rate}, tax is ${value * rate} and total is ${value + value * rate}`
    // );
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));
console.log(addVAT2(40));
*/

///////////////////////////////////////////////
// Coding Challenge #1

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // console.log(this.answers);
    // const [indexArr, valueArr] = this.answers;
    const questionPrompt = Number(
      prompt(`What is your favourite programming language?
      0: JavaScript
      1: Python
      2: Rust
      3: C++
      (Write option number)`)
    );
    console.log(questionPrompt);
    if (questionPrompt >= 0 && questionPrompt < 4) {
      for (let i = 0; i < this.answers.length; i++) {
        if (questionPrompt === i) this.answers[i] += 1;
        console.log(this.answers);
      }
    } else {
      console.log(`Please answer with a number in range 0-3`);
    }
  },
  displayResults(type) {
    console.log(this.answers);
  },
};

// poll.registerNewAnswer();
poll.registerNewAnswer(displayResults);

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
