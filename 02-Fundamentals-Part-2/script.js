'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log(`I can drive!`);

//const interface = 'Audio';
//const private = 534;
*/

// Functions
/*
function logger() {
  console.log('My name is Matt');
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const  appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);


function describeCountry(country, population, capitalCity){
  const chosenCountry = `${country} has ${population} milion people and its capital city is ${capitalCity}`
  return chosenCountry;
}
const finland = describeCountry('Finland', 6, 'Helsinki');
console.log(finland);

const poland = describeCountry('Poland', 49, 'Warsaw');
console.log(poland);

const portugal = describeCountry('Portugal', 33, 'Lizbona');
console.log(portugal);
*/

/*
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1992);

//const age1 = calcAge1(1992);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1992);
console.log(age1, age2);
*/


//Function Declaration
/*
function percentageOfWorld1(population) {
  const percentageOfCountry = population / 7900 * 100;
  return percentageOfCountry;
}
const percentage1 = percentageOfWorld1(49);
console.log(percentage1);

const percentage2 = percentageOfWorld1(1441);
console.log(percentage2);

const percentage3 = percentageOfWorld1(33);
console.log(percentage3);
*/

// Function Expression
/*
const percentageOfWorld2 = function(population) {
  const percentageOfCountry = population / 7900 * 100;
  return percentageOfCountry;
}
const percentage4 = percentageOfWorld2(49);
console.log(percentage4);

const percentage5 = percentageOfWorld2(1441);
console.log(percentage5);

const percentage6 = percentageOfWorld2(33);
console.log(percentage6);
*/

// ARROW FUNCTIONS

// Arrow Function - one liner: no need for return
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
 // return retirement;
 return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1992, 'Matt'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
const percentageOfWorld3 = population => population / 7900 * 100;
const percentage1 = percentageOfWorld3(1441);
console.log(percentage1);
*/

// FUNCTIONS CALLING OTHER FUNCTIONS

/*function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
 const applePieces = cutFruitPieces(apples);
 const orangePieces = cutFruitPieces(oranges);
  //console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2,3));
*/

/*
function percentageOfWorld1(population) {
  const percentageOfCountry = population / 7900 * 100;
  return percentageOfCountry;
}

const describePopulation = (country, population) => {
  const calculatedPercentage = percentageOfWorld1(population);
  console.log(`${country} has ${population} million people, which is about ${calculatedPercentage} % of the world.`);
}

const percentage1 = describePopulation('Poland', 49);
const percentage2 = describePopulation('Portugal', 33);
const percentage3 = describePopulation('China', 1441);
*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`)
    return retirement;
  } else {
    console.log(`${firstName} has already retired`)
    return -1;
  }

}
console.log(yearsUntilRetirement(1992, 'Matt'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

// CODING CHALLENGE #1
/*
const calcAverage = (a, b, c) =>(a + b + c)/3;

// Test 1
let avgDolphins = calcAverage(44, 23, 71);
console.log(avgDolphins);

let avgKoalas = calcAverage(65, 54, 49);
console.log(avgKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
  //const avgDolphins1 = calcAverage(score1, score2, score3);
  //const avgKoalas1 = calcAverage(score1, score2, score3);
  if(avgDolphins >= avgKoalas*2){
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  }
  else if(avgKoalas >= avgDolphins*2){
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins!`);
  }

}

const test = checkWinner(avgDolphins, avgKoalas);

// Test 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

const test2 = checkWinner(avgDolphins, avgKoalas);
*/

// ARRAYS

/*
const friend1 = 'Michael';
const friend2 = 'John';
const friend3 = 'Steven';

const friends = ['Michael', 'John', 'Steven'];
console.log(friends);

//const years = new Array(1992, 1984, 2007, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice']; can't change whole array

const firstName = 'Matt';
const matt = [firstName, 'Kowalski', 2037-1992, 'programmer', friends];
console.log(matt);
console.log(matt.length);


//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);
*/

/*
function percentageOfWorld1(population) {
  const percentageOfCountry = population / 7900 * 100;
  return percentageOfCountry;
}

const populations = [6, 33, 49, 1411];
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);
*/

/*
const friends = ['Michael', 'John', 'Steven'];
console.log(friends);

// ADD Elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('Peter');
console.log(friends);

// REMOVE Elements
friends.pop();  // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('John'));
console.log(friends.indexOf('Bob')); // -1 index

friends.push(23);
console.log(friends.includes('John')); // True
console.log(friends.includes('Bob')); // False
console.log(friends.includes(23)); // Strict

if (friends.includes('Michael')) {
  console.log(`You have a friend called Steven`);
}
*/

/*
const neighbours = ['Germany', 'Czech Republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log(`Probably not a central European country`);
} else {
  console.log(`Probably a central European country or Poland`);
}

console.log(neighbours.indexOf('Ukraine'));
neighbours[3] = 'Russia';
console.log(neighbours);
*/

// CODING CHALLENGE #2

//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
/*
const calcTip = (bill) => {
  if(bill>=50 && bill <=300){
    const tip = bill * 0.15;
    return tip;
  }
  else {
    const tip = bill * 0.2;
    return tip;
  }
}

const bills = [125, 555, 44];
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]];
console.log(total);
*/

// OBJECTS
/*
const mattArray = [
'Matt',
'Kowalski',
2037-1992,
'programmer',
['Michael', 'Peter', 'Steven']
];

const matt = {  //5 properties: firstName, lastName, age, job, friends | Object literal syntax
  firstName: 'Matt',
  lastName: 'Kowalski',
  age: 2037-1992,
  job: 'programmer',
  friends: ['Michael', 'Peter', 'Steven']
};
*/

// DOT VS. BRACKET NOTATION
/*
const matt = {  //5 properties: firstName, lastName, age, job, friends | Object literal syntax
  firstName: 'Matt',
  lastName: 'Kowalski',
  age: 2037-1992,
  job: 'programmer',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(matt);

console.log(matt.lastName);
console.log(matt['lastName']); // insert any expression that we'd like

const nameKey = 'Name';
console.log(matt['first' + nameKey]);
console.log(matt['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Matt? Choose between firstName, lastName, age, job and friends');
//console.log(matt[interestedIn]);

if(matt[interestedIn]) {
  console.log(matt[interestedIn]);
} else {
  console.log(`Wrong request! Choose between firstName, lastName, age, job and friends`)
}

matt.location = 'Poland';
matt['twitter'] = '@mrsqueezeme92';
console.log(matt);

// Challenge
// 'Matt has 3 friends and his best friend is called Michael'

const friendsArray = matt.friends;
const friendsLength = friendsArray.length;
const bestFriend = friendsArray[0];
console.log(friendsArray);
console.log(friendsLength);
console.log(bestFriend);

console.log(`${matt.firstName} has ${friendsLength} friends, and his best friend is called ${bestFriend}`);

console.log(`${matt.firstName} has ${matt.friends.length} friends, and his best friend is called ${matt.friends[0]}`);
*/

/*
const myCountry = {
  country: 'Poland',
  capital: 'Warsaw',
  language: 'Polish',
  population: 49,
  neighbours: ['Germany', 'Czech Republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia']
}
console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population = myCountry.population + 2;
console.log(myCountry);
myCountry['population'] = myCountry.population - 2;
console.log(myCountry);
*/

// OBJECT METHODS
/*
const matt = {
  firstName: 'Matt',
  lastName: 'Kowalski',
  birthYear: 1992,
  job: 'programmer',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  // return 2037 - birthYear;
  // }

  // calcAge: function() {
  // console.log(this);
  // return 2037 - this.birthYear;
  //}

  calcAge: function () {
    this.age = 2037 - this.birthYear;
  return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

//console.log(matt.age);

// Challenge
// 'Matt is a 46-year old teacher, and he has a driver's license.'
console.log(matt.calcAge());
console.log(matt.age);
console.log(matt.getSummary());


const myCountry = {
  country: 'Poland',
  capital: 'Warsaw',
  language: 'Polish',
  population: 49,
  neighbours: ['Germany', 'Czech Republic', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'],

  describe: function() {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function() {
    this.isIsland = this.neighbours.length === 0 ? true : false
  }
}
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
*/

// CODING CHALLENGE #3
/*
const mark = {
  name: 'Mark',
  surname: 'Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

const john = {
  name: 'John',
  surname: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

john.calcBMI();
mark.calcBMI();

console.log(`${john.name} ${john.surname}'s BMI (${john.BMI}) is ${john.BMI > mark.BMI ? 'higher' : 'lower'} than ${mark.name} ${mark.surname}'s (${mark.BMI})!`);

console.log(`${john.BMI > mark.BMI ? `${john.name} ${john.surname}` : `${mark.name} ${mark.surname}`}'s BMI (${john.BMI > mark.BMI ? `${john.BMI}` : `${mark.BMI}`}) is higher than ${mark.BMI > john.BMI ? `${john.name} ${john.surname}` : `${mark.name} ${mark.surname}`}'s (${john.BMI > mark.BMI ? `${mark.BMI}` : `${john.BMI}`})`);

if (mark.BMI > john.BMI) {
  console.log(`${mark.name} ${mark.surname}'s BMI (${mark.BMI}) is higher than ${john.name} ${john.surname}'s (${john.BMI})`);
} else if (john.BMI > mark.BMI) {
  console.log(`${john.name} ${john.surname}'s BMI (${john.BMI}) is higher than ${mark.name} ${mark.surname}'s (${mark.BMI})`);
}
*/

// ITERATION: THE FOR LOOP
// Control structure
//3 parts - 1st: initial value of counter, 2nd: logical condition that is evaluated before each loop, 3rd: counter increase

// console.log('Lifting weights repetition 1 🔁');
// console.log('Lifting weights repetition 2 🔁');
// console.log('Lifting weights repetition 3 🔁');
// console.log('Lifting weights repetition 4 🔁');
// console.log('Lifting weights repetition 5 🔁');
// console.log('Lifting weights repetition 6 🔁');
// console.log('Lifting weights repetition 7 🔁');
// console.log('Lifting weights repetition 8 🔁');
// console.log('Lifting weights repetition 9 🔁');
// console.log('Lifting weights repetition 10 🔁');
/*
//for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🔁`);
}

for(let i = 1; i<=50;i++) {
  console.log(`Voter number ${i} is currently voting`);
}
*/

// LOOPING ARRAYS, BREAKING AND CONTINUING
/*
const mattArray = [
  'Matt',
  'Kowalski',
  2037-1992,
  'programmer',
  ['Michael', 'Peter', 'Steven'],
  true
  ];

const types = [];

  for (let i = 0; i < mattArray.length; i++){
    // Reading from mattArray array
     console.log(mattArray[i], typeof mattArray[i]);

    // Filling types array
    // types[i] = typeof mattArray[i];
    types.push(typeof mattArray[i]);
  }
  console.log(types);

  const years = [1992, 2007, 1969, 2020];
  const ages = [];
  for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
    console.log(ages[i]);
  }
  console.log(ages);

  // continue and break
  // continue stops only current iteration
console.log('--- ONLY STRINGS ---')
  for (let i = 0; i < mattArray.length; i++){
    if(typeof mattArray[i] !== 'string') continue; //condition is true, so continue will stop current iteration with number value and skip to the next until it's a string.

     console.log(mattArray[i], typeof mattArray[i]);
  }

  console.log('--- BREAK WITH NUMBER ---')
  for (let i = 0; i < mattArray.length; i++){
    if(typeof mattArray[i] === 'number') break;

     console.log(mattArray[i], typeof mattArray[i]);
  }

  const percentages2 =[];

  const populations = [6, 33, 49, 1411];
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

function percentageOfWorld1(population) {
  const percentageOfCountry = population / 7900 * 100;
  return percentageOfCountry;
}

for (let i = 0; i < populations[i]; i++){
 percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);
*/
/*
const mattArray = [
  'Matt',
  'Kowalski',
  2037-1992,
  'programmer',
  ['Michael', 'Peter', 'Steven'],
  true
  ];

//0, 1, ..., 4
// 4, 3, ..., 0

  for(let i = mattArray.length-1; i >= 0; i--){
    console.log(i, mattArray[i]);
  }

  for (let exercise = 1; exercise <= 3; exercise++){
    console.log(`------- Starting exercise ${exercise}`);

    for (let rep = 1; rep <= 5; rep++){
      console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
    }
  }

  const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
];

  for(let i = 0; i < listOfNeighbours.length; i++){
    //console.log(i, listOfNeighbours[i]);
   for(let j = 0; j < listOfNeighbours[i].length; j++){
    //console.log(j, listOfNeighbours[i][j], listOfNeighbours[i].length);
      console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
   }
}

// const listOfNeighbours = [
//   ['Canada', 'Mexico'],
//   ['Spain'],
//   ['Norway', 'Sweden', 'Russia']
// ];

// listOfNeighbours.forEach((list => {
//     list.forEach((item) => {
//         if (list.length === 1) {
//             console.log(`${item} is neighbour of none`)
//         } else {
//             const copy = list.filter((elem) => elem !== item);
        
//             console.log(`${item} is neighbour of ${copy.join(', ')}`)
//         }
//     })
// }))

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
            if (listOfNeighbours[i].length === 1) {
                console.log(${listOfNeighbours[i][j]} is neighbour of none)
        } else {
            const copy = listOfNeighbours[i].filter((elem) => elem !== listOfNeighbours[i]);
        
            console.log(${listOfNeighbours[i][j]} is neighbour of ${copy.join(', ')})
        }
    }
    
}

*/

// THE WHILE LOOP

// for(let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🔁`);
// }

// let rep = 1;
// while(rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep} 🔁`);
//   rep++;
// }

/*
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6){
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) console.log(`Loop is about to end...`);
}
*/
/*
const percentages3 =[];

const populations = [6, 33, 49, 1411];
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

function percentageOfWorld1(population) {
const percentageOfCountry = population / 7900 * 100;
return percentageOfCountry;
}

let i = 0;
while(i === 0){
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

// for (let i = 0; i < populations[i]; i++){
// percentages2.push(percentageOfWorld1(populations[i]));
// }
*/

// CODING CHALLENGE #4

//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
  if(bill>=50 && bill <=300){
    const tip = bill * 0.15;
    return tip;
  }
  else {
    const tip = bill * 0.2;
    return tip;
  }
}

for(let i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i])
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(tips);
console.log(totals);

const calcAverage = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}
calcAverage(totals);
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
