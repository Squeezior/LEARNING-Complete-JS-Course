// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
//PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1.) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp.
// - How to compute the max and min temperatures?
// - What's a sensor error? And what to do when one occurs?

//2.) Breaking up the problem into sub-problems
// - How to ignore the sensor error?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and then return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive two arrays of temperatures

//1.) Understanding the problem
// - With 2 arrays, should we implement the same functionality twice? NO! Just merge two arrays!

//2.) Breaking up into sub-problems
// - Merge two arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temperature',
//     unit: 'celsius',

//     // C) FIX
//     // value: Number(prompt('Degrees celsius:')),
//     value: 10,
//   };

//   // console.log(measurement);
//   // B) FIND
//   console.table(measurement);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

//Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) IDENTIFY
// console.log(amplitudeBug);

// CODING CHALLENGE #1

//1) Understanding the problem
// how to print as many strings as numbers in array?
// how to join strings?
// what is the X days?

//2) Break problem into sub-problems
// create a template literal
// create a loop and store a value of this loop somewhere
// add the value of loop to each other
// create a variable to store added loop's value to each other

// const printForecast = function (arr) {
//   let str = '...';
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(`...${arr[i]}°C in ${i} days `);
//     const forecastTemplate = ` ${arr[i]}°C in ${i + 1} days ... `;
//     // console.log(forecastTemplate);
//     str += forecastTemplate;
//   }
//   console.log(sum);
// };

// // const forecast = printForecast([17, 21, 23]);
// const forecast = printForecast([12, 5, -5, 0, 4]);

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}°C in ${[i + 1]} days ... `;
//   }
//   console.log(`...` + str);
// };
// printForecast(data1);
// printForecast(data2);
