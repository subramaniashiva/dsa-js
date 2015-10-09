'use strict';
/*
  Problem Statement
  Find the largest sum of any two elements in an Array
*/
function largestSumOfTwo(array) {
	var result;
	if(array.length > 1) {
		result = array[0] + array[1];
		for(var i = 2; i < array.length; i++) {
			
		}
	}
	return result;
}

var array = [12,13,1,2,45];
var result = largestSumOfTwo(array);
console.log(result);