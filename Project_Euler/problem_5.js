'use strict';
/*
  Problem Statement:
  https://projecteuler.net/problem=5

  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function minDivisibleNumber(min, max) {
  let result = max;
  while(true) {
    let found = true;
    // Starting the loop from bigger number to gain performance
    for(let j = max; j >= min; j--) {
      if(result%j !== 0) {
        found = false;
        break;
      }
    }
    if(found) {
      break;
    } else {
      // If it is not divisible by any of the numbers between max and min
      // then we can add the max instead of 1. Since the number we are looking for
      // is a divisible of max
      result += max;
    }
  }
  return result;
}
console.log(minDivisibleNumber(1, 20));