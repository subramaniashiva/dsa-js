'use strict';
/*
  Problem Statement:
  https://projecteuler.net/problem=6

  The sum of the squares of the first ten natural numbers is 385
  The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)pow2 = 3025
  Hence the difference between the sum of the squares of the first ten natural numbers 
  and the square of the sum is 3025 − 385 = 2640.
  Find the difference between the sum of the squares of the first one hundred natural numbers 
  and the square of the sum.
*/

function diffOfSquare(maxNumber) {
  let result = 0;
  // Lets take 3 natural number a,b,c. The problem is a^2 + b^2 + c^2 - (a+b+c)(a+b+c)
  // which is a^2 + b^ + c^2 - (a^2 + b^2 + c^2 + 2(ab + bc + ca)
  // Which is 2(ab + bc + ca)
  // Another solution can also be found out using the sum of natural numbers formula - (n*(n+1))/2
  for(let i = 1; i <= maxNumber; i++) {
    for(let j = 1; j <=maxNumber; j++) {
      if(i !== j) {
        result += (i*j);
      }
    }
  }
  return result;
}
console.log(diffOfSquare(100));