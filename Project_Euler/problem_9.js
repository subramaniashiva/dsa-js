'use strict';
/*
  Problem Statement:
  https://projecteuler.net/problem=9
  
  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

  a2 + b2 = c2
  For example, 32 + 42 = 9 + 16 = 25 = 52.

  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  Find the product abc.
*/
function pythogeranTriplet(sum) {
  // Since a < b < c, a cannot be more than 1/3 of the sum
  for (let a = 1; a < sum / 3; a++) {
    // The max a can reach is sum/3, hence the upper limit for b is 2/3*sum
    for (let b = parseInt(2 * (sum / 3)); b >= 1; b--) {
      // Since c2 = a2 + b2, c = sqrt(a2 + b2)
      let c = Math.sqrt((a * a) + (b * b));
      if ((parseInt(c, 10) === c) && (a + b + c === sum)) {
        return [a, b, c];
      }
    }
  }
}
let array = pythogeranTriplet(1000);
let product;
if (array) {
  product = array.reduce((prev, curr, index) => {
      return prev * curr;
  }, 1);
}
console.log(product);
