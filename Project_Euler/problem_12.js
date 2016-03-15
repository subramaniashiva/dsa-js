'use strict';
/*
  Problem Statement:
  https://projecteuler.net/problem=12
  
  The sequence of triangle numbers is generated by adding the natural numbers. 
  So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

  1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

  Let us list the factors of the first seven triangle numbers:

   1: 1
   3: 1,3
   6: 1,2,3,6
  10: 1,2,5,10
  15: 1,3,5,15
  21: 1,3,7,21
  28: 1,2,4,7,14,28
  We can see that 28 is the first triangle number to have over five divisors.

  What is the value of the first triangle number to have over five hundred divisors?
*/

// Returns the number of divisiors.
function getDivisorsLength(number) {
  let divisorCount = 0;
  let numSqrt = Math.sqrt(number);
  // It is enough to check only till the square root of the number
  for(let i = 1; i <= numSqrt; i++) {
    if(number % i === 0) {
      divisorCount += 2;
    }
  }
  // If it is a perfect square subtract 1, since we did divisorCount+=2 in the loop
  if(numSqrt*numSqrt === number) {
    divisorCount--;
  }
  return divisorCount;
}
// Gets the sum of natural numbers upto the number n
function getSum(max) {
  return (max*(max+1))/2;
}
// Get the triangle numbers with the minimum amount of divisiors
function getTriangleNumber(minNoOfDivisors) {
  let currentNumber = minNoOfDivisors;
  let currentSum = getSum(currentNumber);
  while(getDivisorsLength(currentSum) <= minNoOfDivisors) {
    currentNumber++;
    currentSum = getSum(currentNumber);
  }
  return currentSum;
}

console.log(getTriangleNumber(500));