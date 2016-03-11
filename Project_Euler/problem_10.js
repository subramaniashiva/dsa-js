'use strict';
/*
  Problem Statement:
  https://projecteuler.net/problem=10
  
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

  Find the sum of all the primes below two million.
*/
var isPrime = require('./utils/isPrime.js').isPrime;

function sumOfAllPrimes(max) {
  let sum = 0;
  for(let i = 2; i <= max; i++) {
    if(isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfAllPrimes(2000000));
