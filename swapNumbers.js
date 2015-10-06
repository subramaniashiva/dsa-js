'use strict';
/*
  Problem Statement
  The very famous and age old puzzle :)
  Swap two numbers without using temp variable
*/
function swapNumbers(numbersArray) {
	numbersArray[1] = numbersArray[1] - numbersArray[0];
	numbersArray[0] = numbersArray[0] + numbersArray[1];
	numbersArray[1] = numbersArray[0] - numbersArray[1];
}
/*
A complex solution. but still works :)

function swapNumbers(numbersArray) {
	if(numbersArray && numbersArray.length === 2) {
		numbersArray[0] = 2*(numbersArray[1] - numbersArray[0]) + numbersArray[0];
		numbersArray[1] = numbersArray[1] - (numbersArray[0] - numbersArray[1]);
		numbersArray[0] = ((numbersArray[0] - numbersArray[1])/2) + numbersArray[1]
		return numbersArray;
	} else {
		return numbersArray;
	}
}
*/
var a = [7, 0];
swapNumbers(a);
// Arrays are passed by reference :)
console.log(a);