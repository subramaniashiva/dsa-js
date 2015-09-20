'use strict';
/*
  Problem Statement
  Generate random number between the given two numbers
*/
function getRandomNumber(lower, upper, includeBounds) {
	var random;
	if(arguments.length > 1) {
		random = (Math.random() * (upper - lower)) + lower;
		random = parseInt(random, 10);
	} else {
		random = Math.random();
	}
	return random;
}

console.log(getRandomNumber(3, 5));