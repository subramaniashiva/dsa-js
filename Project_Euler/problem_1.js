'use strict';
/*
  Problem Statement:
  https://projecteuler.net/problem=1
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  Find the sum of all the multiples of 3 or 5 below 1000.
*/
function sumOfMultiples(numbersArray, upperLimit) {
  let sum = 0;
	for(let i = 0; i < upperLimit; i++) {
    if(numbersArray.some((element) => 
      i%element === 0
    )) {
      sum += i;
    }
  }
	return sum;
}

var arr = [3,5];
console.log(sumOfMultiples(arr, 1000));