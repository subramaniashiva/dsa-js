'use strict';
/*
  Problem Statement:
  https://projecteuler.net/problem=4

  A palindromic number reads the same both ways. 
  The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
  Find the largest palindrome made from the product of two 3-digit numbers.
*/
function isPalindrome(number) {
  if(number && (number.toString() === number.toString().split('').reverse().join(''))) {
    return true;
  }
  return false;
}
function largestPalindrome(numberOfDigits) {
  let palindrome = 0;
  let max = Math.pow(10, numberOfDigits) - 1;
  let min = Math.pow(10, numberOfDigits-1);
  for(let i = min; i <= max; i++) {
    for(let j = max; j >= min; j--) {
      let current = i*j;
      if(isPalindrome(current) && current > palindrome) {
        palindrome = current;
      }
    }
  }
  return palindrome;
}
console.log(largestPalindrome(3));