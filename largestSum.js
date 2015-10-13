'use strict';
/*
  Problem Statement
  Find the largest sum of any two elements in an Array
*/
function largestSumOfTwo(array) {
	var result;
	if(array.length > 1) {
		result = array[0] + array[1];
		for(var i = 0; i < array.length; i++) {
			for(var j = i + 1; j < array.length; j++) {
				if(array[i] + array[j] > result) {
					result = array[i] + array[j];
				}
			}
		}
	}
	return result;
}

var array = [12,13,1,2,45];
var result = largestSumOfTwo(array);
console.log(result);