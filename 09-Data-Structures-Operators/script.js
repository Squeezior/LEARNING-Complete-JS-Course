'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  // console.log(type);
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

///////////////////////////////////////////////
// CODING CHALLENGE 4
/*
// My solution
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

const convertBtn = document
  .querySelector('button')
  .addEventListener('click', function () {
    // console.log(document.querySelector('textarea').value);
    const getText = document.querySelector('textarea').value.split('\n');
    // console.log(getText);

    const convertedArray = [];

    for (const elem of getText) {
      const mainArray = elem.toLowerCase().trim();
      // console.log(mainArray);
      const indexOfUnderscore = mainArray.indexOf('_');
      // console.log(indexOfUnderscore + 1);
      const leftStr = mainArray.slice(0, indexOfUnderscore);
      // console.log(leftStr);
      const rightStr = mainArray.slice(indexOfUnderscore + 2);
      // console.log(rightStr);
      const capitalLetter = mainArray
        .slice(indexOfUnderscore + 1, indexOfUnderscore + 2)
        .toUpperCase();
      // console.log(capitalLetter);
      const connectedStr = leftStr.concat(capitalLetter, rightStr);
      const paddedStr = connectedStr.padEnd(20, ' ');
      const tick = '✅';
      const repeat = tick.repeat(convertedArray.length + 1);
      console.log(paddedStr.concat(' ', repeat));
      convertedArray.push(connectedStr);
    }
    console.log(convertedArray);
    // const noWhiteSpaces = getText.trim();
    // console.log(noWhiteSpaces);
  });
*/

// Jonas' solution
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

/*
///////////////////////////////////////////////
// Working with Strings - Part 3

// split
console.log('a+very+nice+string'.split('+'));
console.log('Matt Kowalski'.split(' '));

const [firstName, lastName] = 'Matt Kowalski'.split(' ');
console.log(firstName, lastName);

//join
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //   namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // }
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    console.log(namesUpper.join(' '));
  }
};

capitalizeName('jessica ann smith davis');
capitalizeName('matt kowalski');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Matt'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // convert number to string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64677373));
console.log(maskCreditCard(433827272929154));
console.log(maskCreditCard('4338272729291544321'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

/*
///////////////////////////////////////////////
// Working with Strings - Part 2
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('matt'.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const capitalization = function (name) {
  const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(nameCorrect);
};
capitalization('jOckeR');

// Comparing email
const email = 'hello@matt.io';
const loginEmail = '   Hello@Matt.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); // regular expression. Replace method is case sensitive.

// Booleans
// includes, startsWith, endsWith

// includes
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
// startsWith
console.log(plane.startsWith('Air'));
//endsWith
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('I have Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
//////////////////////////////////////////
// Working with Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4)); // substring, impossible to mutate strings, since they are primitive types. Slice returns new string.
console.log(airline.slice(4, 7)); // end value is not included in the string, stops before reaching index number 7. Length is always end minus beggining (7-4)

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // space will be included, so need to add +1

console.log(airline.slice(-2)); // starts extracting from the end
console.log(airline.slice(1, -1)); // cuts off first and last index

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 🙄');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Whenever we call a method on a string, JS will automatically behind the scene convert this string into a string object with the same content, then on that object is where the method is called - this is called Boxing.

console.log(new String('matt'));
console.log(typeof new String('matt'));

console.log(typeof new String('matt').slice(1));

// When the operation is done, the string object is converted back into a regular string primitive
// All string methods returns primitive even when called on a string object
*/

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  ////////////////////
  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
    console.log(
      `Here is your pizza with ${mainIngredient}, ${otherIngredients}`
    );
  },
};

/*
////////////////////////////////////////////
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🥇'],
  [false, 'Try again🤯'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

// const corrAnswer = question.get('correct');
// console.log(corrAnswer);
// corrAnswer === answer
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

console.log(question.get(question.get('correct') === answer)); // question.get(correct) === answer will return TRUE, then question.get(true) will return array with key true, which is [true, 'Correct'].

// Convert Map to Array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
////////////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

/*
////////////////////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

// console.log(new Set('Matt'));
// console.log(new Set(''));

console.log(ordersSet.size); // how many different dishes will be cooked for this order

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear(); // deletes all elements in Set
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // Creating an array from Set. Spread unpacks all the values from iterable (Set) and passes them to the [] Array we've just created.
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size // check how many unique positions are in the Array - display the size of the new Set
);

console.log(new Set('mattkowalski').size);
// Set are not intended to replace arrays. Whenever you need to store values in order and that might contain duplicates use array. Also true when you need to really manipulate data, arrays have access to many great methods.
*/

/*
////////////////////////////////////////////
// Looping Objects: Object Keys, Values and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

//  Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value], with destructuring [key, {open, close}]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
////////////////////////////////////////////
// Optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at: ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Matt', email: 'hello@matt.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');
*/

/*
////////////////////////////////////////////
// For Of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
*/

/*
////////////////////////////////////////////
// Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// AND assignment operator
rest2.owner &&= '<ANONYMOUS>'; // assigns a value to a variable if it's currently truthy, if it's falsy nothing happens.
rest1.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
////////////////////////////////////////////
// The Nullish Coalescing Operator

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish values: null and undefined (NOT 0 or '')
// Nullish Coalescing Operator
// only if first operand would be null or undefined then the second operand would be chosen, executed and returned
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

/*
////////////////////////////////////////////
// Short Circuiting (&& and ||)
console.log('------OR------');
// Use ANY data type, return ANY data type, short-circuiting (short circuit evaluation)
console.log(3 || 'Matt');
console.log('' || 'Matt');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------AND------');
console.log(0 && 'Matt');
console.log(7 && 'Matt');

console.log('Hello' && 23 && null && 'Matt');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// OR operator will return first truthy value or last value if all of them are falsy
// AND operator will return first falsy value or last value if all of them are truthy
// we can use OR operator to set default values, and AND operator to execute code in second operand if the first operand is true
*/

/*
////////////////////////////////////////////
// Rest Pattern and Parameters

// 1.) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST because on LEFT side of = operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2.) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 6, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/*
////////////////////////////////////////////
// The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // ... - spread operator. Whenever we need individual elements of an array.
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // building new array
console.log(newMenu);
// Spread operator takes all the elements from the array and doesn't create new variables. We can only use it in places where we would otherwise write values separated by commas.

// Copy array (shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
// spread operator works on all iterables
// Iterables: arrays, strings, maps, sets. NOT objects.
const str = 'Matt';
const letters = [...str, ' ', 'K.'];
console.log(letters);
console.log(...str);
console.log('m', 'a', 't', 't', '', 'k.');
// console.log(`${...str} Kowalski`); // doesn't expect multiple values separated by commas.

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Objects shallow copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);
*/

/*
////////////////////////////////////////////
// Destructuring Objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables in objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // Needs an extra parentheses, can't start line with curly braces, because JS expects a code block, and we can't assign value with an "=" sign to code block.
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
////////////////////////////////////////////
// Destructuring Arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

/*
// CODING CHALLENGE #3
/////////////////////////////////////////////

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);

// // 1.
// const eventsSet = new Set(gameEvents.values());
// // console.log(eventsSet);
// const events = [...eventsSet];
// console.log(events);

// // 2.
// console.log(gameEvents);
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// // "An event happened, on average every 9 minutes"
// // 90 / gameEvents.size()
// console.log(gameEvents.size);
// const gameLength = 90;
// const avgEvent = gameLength / gameEvents.size;
// console.log(`An event happened, on average every ${avgEvent} minutes`);

// // 4.
// for (const [keys, values] of gameEvents) {
//   keys > 0 && keys <= 45
//     ? console.log(`[FIRST HALF] ${keys}: ${values}`)
//     : console.log(`[SECOND HALF] ${keys}: ${values}`);
// }

// 1.
// console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

////////////////////////////////////////////
// Coding Challenge 1
/*
const players1 = game.players[0];
console.log(players1);
const players2 = game.players[1];
console.log(players2);

const [gk, ...fieldPlayers] = game.players[0];
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = players1;
players1Final.push('Thiago', 'Coutinho', 'Perisic');
console.log(players1Final);

const {
  odds: { team1: team1, x: draw, team2: team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...scored) {
  // for (let i = 0; i < game.scored.length; i++) {
  console.log(...scored, game.score);
  // }
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(game.scored);

if (team1 < team2) {
  console.log(game.team1);
} else {
  console.log(game.team2);
}

team1 < team2 ? console.log(game.team1) : console.log(game.team2);
*/

/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

////////////////////////////////////////////
// Coding Challenge #2
/*
// 1.
// console.log(game.scored);
// console.log(game.scored.length);

for (const [goalNum, scorer] of game.scored.entries()) {
  console.log(`Goal ${goalNum + 1}: ${scorer}`);
}

// 2.
// const oddsAvg = Object.values(game.odds);
// console.log(oddsAvg);

const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

const oddsSum = [team1, draw, team2];
// console.log(oddsSum);

let suma = 0;
for (let i = 0; i < oddsSum.length; i++) {
  suma += oddsSum[i];
  // console.log(suma);
}
let oddsAvg = suma / oddsSum.length;
// console.log(suma);
console.log(`Average odds are: ${oddsAvg}`);

// 3.
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of victory draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// Bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);


// for (const elements of oddsSum) {
//   // console.log(elements);
//   suma += oddsSum;
//   // console.log(suma);
// }
// console.log(suma);

// let avgOdd = 0;
// for (let avgOdds of oddsSum) {
//   avgOdd += avgOdds;
//   console.log(avgOdd);
// }
*/
/*
// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`; // looks for same property/key name from game.odds in the game object
  // gets keys from game.odds and puts them into team variable, gets keys values and puts them into odd variable
  // checks if current team key is x, if it is - creates 'draw' string, if not then creates template literal with current team key from game object.
  // only works if the keys from those two nested objects are the same
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// //  Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value], with destructuring [key, {open, close}]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
*/
