'use strict';
/*
  Problem Statement:
  https://projecteuler.net/problem=3

  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?
*/

function largestPrimeFactor(number) {
  let largestPrime = 1;
  let i = 2;
  while(i <= number) {
    if(number % i === 0) {
      number = number/i;
    } else {
      i++;
    }
  }
  return i;
}
console.log(largestPrimeFactor(600851475143));