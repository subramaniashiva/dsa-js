'use strict';
// This program check whether the given number is prime or not
console.log('Prime number checker program');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter your number\n', function(answer) {
    console.log(isPrime(answer));
    rl.close();
});
/* 
Function to check if the number is prime or not
A number is prime if it is only divisible by 1 and the number itself
It is enough to check if it is divisible by any of the numbers 
until the square root of the number.
Reason : Consider the number n is not prime.
Then it can be factored as n = a*b. 
If a and b are greater than square root of n, then a*b will be greater than n.
So either a or b has to be less than sqaure root of n. 
So if we find any one of the numbers
then we can say that the number is not prime
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