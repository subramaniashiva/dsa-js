'use strict';
/*
  Problem Statement
  Generate random number between the given two numbers
*/
function getRandomNumber(lower, upper, includeBounds) {
	var random, temp;
	if(arguments.length > 1) {
    // convert upper and lower to integers
    lower = parseInt(lower, 10);
    upper = parseInt(upper, 10);
    //  If the upper and lower are not correct
    // swap them
		if(lower > upper) {
      temp = lower;
      lower = upper;
      upper = temp;
    }
    if(includeBounds) {
		  random = (Math.random() * (upper - lower + 1)) + lower;
    } else {
      random = (Math.random() * (upper - lower)) + lower;
    }
		random = parseInt(random, 10);
	} else {
		random = Math.random();
	}
	return random;
}

console.log(getRandomNumber(3, 5, false));