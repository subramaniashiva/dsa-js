'use strict';
/*
  Problem Statement:
  https://projecteuler.net/problem=20
  
  n! means n × (n − 1) × ... × 3 × 2 × 1

  For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
  and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

  Find the sum of the digits in the number 100!
*/

// JavaScript can't handle big numbers :(
var BigNumber = require('big-number');

// Add numbers in an array
let addDigits = (numberArray) => {
  return numberArray.reduce((prev, current) => (parseInt(prev, 10) + parseInt(current, 10)), 0);
}
// Factorial function for big numbers
let factorial = (bigNumber) => {
  bigNumber = bigNumber.number.reverse().join('');
  if(parseInt(bigNumber, 10) === 1) {
    return 1;
  } else {
    return BigNumber(bigNumber).mult(factorial(BigNumber(bigNumber).minus(1)));
  }
}
var numArray = factorial(BigNumber('100'));
console.log(addDigits(numArray.number));
