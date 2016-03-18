'use strict';
/*
  Problem Statement:
  https://projecteuler.net/problem=16
  
  2pow15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

  What is the sum of the digits of the number 2pow1000?
*/

// JavaScript can't handle big numbers :(
var BigNumber = require('big-number');

// Add numbers in an array
let addDigits = (numberArray) => {
  return number.reduce((prev, current) => (parseInt(prev, 10) + parseInt(current, 10)), 0);
}

var number = BigNumber(2).pow(1000).number;
console.log(addDigits(number));
