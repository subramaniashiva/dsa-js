'use strict';
// Function to check whether the given number is prime number or not
exports.isPrime  = function(number) {
  let prime = false,
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