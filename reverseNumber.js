'use strict';
/*
	Problem Statement:
	Reverse a number (Don't use string reverse function)
*/

function reverseNumber(num) {
	var output = 0;
	num = parseInt(num, 10);
	num = num + '';
	if(num) {
		for(var i = num.length-1; i >= 0; i--) {
			output += num[i]*Math.pow(10, i);
		}
	}
	return output;
}

var a = 1;
a = reverseNumber(a);
console.log(a);