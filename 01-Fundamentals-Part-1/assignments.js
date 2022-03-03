/*let country = "Poland";
const continent = "Europe";
let population = 48;
console.log({country,continent,population});

const isIsland = false;
let language = "Polish";
console.log({isIsland, population, country, language});

let halfPopulation = population/2;
population = population+1;
let populationOfFinland = 6;
console.log(population>=populationOfFinland);
let avgPopulation = 33;
console.log(avgPopulation>=population);
let description = country+' is in '+continent+', and its '+population+' million people speak '+language;
console.log(description);
*/

/*let age = 30;
age = 31;
console.log (age);

const birthYear = 1992;
birthYear = 1990;
const job;
var job = 'programmer';
job = 'teacher';

lastName = 'Kowalski';
console.log(lastName);*/

/*
// Math operators
const now = 2037;
const ageMatt = now - 1992;
const ageIwonka = now - 2020;
console.log(ageMatt, ageIwonka);

console.log(ageMatt * 2, ageMatt / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Matt';
const lastName = 'Kowalski';
console.log(firstName +' '+ lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x +1
x --; // x = x -1
console.log(x);

// Comparison operators
console.log(ageMatt > ageIwonka); // >, <, >=, <=
console.log(ageIwonka >= 18);

const isFullAge = ageIwonka >= 18;
console.log(isFullAge);
console.log(now-1991>now-2018);
*/

/*const now = 2037;
const ageMatt = now - 1992;
const ageIwonka = now - 2020;

console.log(now - 1991 > now - 2018);
console.log(25-10-5);

let x, y;
x = y = 25-10-5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageMatt + ageIwonka) / 2
console.log(ageMatt, ageIwonka, averageAge);
*/

//Coding challenge #1

/*
let markWeight, markHeight, johnWeight, johnHeight;

markWeight = 78;
markHeight = 1.69;

johnWeight = 92;
johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

console.log({markWeight, markHeight, johnWeight, johnHeight, markBMI, johnBMI});

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

console.log({markWeight, markHeight, johnWeight, johnHeight, markBMI, johnBMI});

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
*/

/*const firstName = 'Matt';
const job = 'teacher';
const birthYear = 1992;
const year = 2037;

const matt = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(matt);


const mattNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(mattNew);

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`) */

/*let country = "Poland";
const continent = "Europe";
let population = 48;
console.log({country,continent,population});

const isIsland = false;
let language = "Polish";
console.log({isIsland, population, country, language});

let halfPopulation = population/2;
population = population+1;
let populationOfFinland = 6;
console.log(population>=populationOfFinland);
let avgPopulation = 33;
console.log(avgPopulation>=population);
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);*/

/*const age = 15;

// Control structure

if(age >= 18){
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if(birthYear <= 2000){
   century = 20;
} else {
   century = 21;
}
console.log(century);*/

/*const country = 'Poland';
let countryPopulation = 130;
let avgPopulation;
if(countryPopulation > 33){
  console.log(`${country}'s population is above average.`)
} else {
  avgPopulation = (33 - countryPopulation)
   console.log(`${country}'s population is ${avgPopulation} million below average`)
}*/

// Coding challenge #2
/*
let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

console.log({markWeight, markHeight, johnWeight, johnHeight, markBMI, johnBMI});

if(markBMI > johnBMI){
console.log(`Mark's BMI is higher than John's!
Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI is higher than Mark's!
John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

console.log({markWeight, markHeight, johnWeight, johnHeight, markBMI, johnBMI});

if(markBMI > johnBMI){
  console.log(`Mark's BMI is higher than John's!
  Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
  } else {
  console.log(`John's BMI is higher than Mark's!
John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
  }
  */

  // Type Conversion
  /*
  const inputYear = '1991';
  console.log(Number(inputYear), inputYear);
  console.log(Number(inputYear) + 18);

  console.log(Number('Matt'));
  console.log(typeof NaN);

  console.log(String(23), 23);

  // Type Coercion
  console.log('I am ' + 23 + ' years old');
  console.log('I am ' + '23' + ' years old');
  console.log('23' - '10' - 3);
  console.log('23' * '2');

  let n = '1' + 1; // '11'
  n = n - 1;  // 11-1 = 10
  console.log(n);
*/

// Truthy and Falsy
// 5 Falsy values: 0, '', undefined, null, NaN

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Matt'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money){
console.log(`Don't spend it all ;)`)
} else {
  console.log(`You should get a job!`);
}

let height = 0;
if(height){
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}*/

//Equality operators: == vs ===
// == loose equality - coerces data
// === strict equality - needs a conversion

/*const age = '18';
if(age === 18) console.log('You just became an adult! (strict)');

if(age == 18) console.log('You just became an adult! (loose)');

const favourite = Number (prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23){ // 23 === 23
  console.log('Cool! 23 is an amazing number!');
} else if(favourite === 7) {
  console.log(`7 is also a cool number!`)
} else if(favourite === 9){
  console.log(`9 is also a cool number!`)
}
else {
  console.log(`Number is not 23 or 7 or 9.`);
}

if(favourite !== 23) console.log(`Why not 23?`);
*/

/*const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1){
  console.log('Only 1 border!');
} else if(numNeighbours > 1) {
  console.log('More than 1 border!');
} else {
  console.log('No borders!');
}*/

// Logical Operators

/*const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); //AND
console.log(hasDriversLicense || hasGoodVision); //OR
console.log(!hasDriversLicense); //NOT

//const shouldDrive = hasDriversLicense && hasGoodVision;

if(hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const isTired = false; //C

console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired){
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}*/

/*const speaksEnglish = true;
const lessPopulation = true;
const isIsland = true;

if(speaksEnglish && lessPopulation && isIsland){
  console.log(`You should live in Poland`);
} else {
  console.log(`Poland does not meet your criteria`);
}*/

// CODING CHALLENGE #3

/*const averageDolphin = (97 + 112 + 101)/3;
console.log(averageDolphin);
const averageKoala = (109 + 95 + 106)/3;
console.log(averageKoala);

if (averageDolphin > averageKoala) {
  console.log('Dolphins won!');
} else if(averageDolphin === averageKoala){
  console.log(`It's a draw!`);
} else {
  console.log(`Koalas won!`);
}

if (averageDolphin >= 100 && averageDolphin > averageKoala) {
  console.log('Dolphins won!');
} else if(averageDolphin < 100 && averageDolphin > averageKoala){
  console.log(`Dolphins lack a minimum requirement of 100 points avg to win`);
} else if(averageKoala >= 100 && averageKoala > averageDolphin) {
  console.log(`Koalas won!`);
} else if(averageKoala < 100 && averageKoala > averageDolphin){
  console.log(`Koalas lack a minimum requirement of 100 points avg to win`);
} else if(averageDolphin >= 100 && averageKoala >= 100 && averageDolphin === averageKoala){
  console.log(`It's a draw!`)
} else {
  console.log('No team wins the trophy!');
}*/

// The Switch Statement

/*
const day = 'friday';

switch(day) {
  case 'monday': //day === 'monday'
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case 'tuesday':
    console.console(`Prepare theory videos`);
    break;
  case 'wednesday':
  case 'thursday':
    console.log(`Write code examples`);
    break;
  case 'friday':
    console.log(`Record videos`);
    break;
  case 'saturday':
  case 'sunday':
    console.log(`Enjoy the weekend!`);
    break;
  default:
    console.log(`Not a valid day!`);
}

if (day === 'monday'){
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === 'tuesday'){
  console.log(`Prepare theory videos`);
} else if (day === 'wednesday' || day ==='thursday'){
  console.log(`Write code examples`);
} else if (day === 'friday') {
  console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday') {
  console.log(`Enjoy the weekend!`);
} else {
  console.log(`Not a valid day!`);
}
*/

/*
const language = 'polish';

switch(language){
  case 'chinese':
  case 'mandarin':
    console.log(`MOST number of native speakers!`);
  break;
  case 'spanish':
    console.log(`2nd place in number of native speakers`);
  break;
  case 'english':
    console.log(`3rd place`);
  break;
  case 'hindi':
    console.log(`Number 4`);
  break;
  case 'arabic':
    console.log(`5th most spoken language`);
  break;
  default:
    console.log('Great language too');
}
*/

// Statements and expressions
/*
3 + 4
1992
true && false && !false // Expressions produce a value

if (23>10) {
 const str = '23 is bigger'; // Statements use expressions
}
const me = 'Matt';
console.log(`I'm ${2037 - 1992} years old ${me}`);
*/

// The Conditional (Ternary) Operator

/*const age = 23;
//age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 💦`);

const drink = age >= 18 ? 'wine 🍷' : 'water 💦';
console.log(drink);

let drink2;
if(age >= 18){
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💦';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`);
*/

/*
const population = 49;
const country = 'Poland';

const countryAverage = population > 33 ? console.log(`Poland's population is above average`) :
console.log(`Poland's population is below average`);

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);
*/

// Coding Challenge 4
/*
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 :
bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
*/

