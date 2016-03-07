'use strict';
/*
  Problem Statement:
  https://projecteuler.net/problem=7

  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
  What is the 10 001st prime number?
*/
function isPrime(number) {
  var prime = false,
      i, numSqrt = Math.sqrt(number);
  // Check if the number is an integer. If not return false
  number = parseInt(number, 10);
  if (typeof number == 'undefined' || typeof number == null || 
    isNaN(number)) {
      return prime;
  } else {
      for (i = 2; i <= numSqrt; i++) {
          if (number % i === 0) {
              return prime;
          }
      }
      return true;
  }
}
function nthPrime(n) {
  let i = 2, result = 0;
  while(!(result === n)) {
    if(isPrime(i++)) {
      result++;
    }
  }
  return i-1;
}
console.log(nthPrime(10001));