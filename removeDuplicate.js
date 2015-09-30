'use strict';
/*
	Problem statement
	Remove duplicate elements in an array
*/

function removeDuplicate(array) {
	var i, j;
	for(i = 0; i < array.length; i++) {
		for(j = i +1; j < array.length; j++) {
			if(array[i] === array[j]) {
				array.splice(j, 1);
				j = j -1;
			}
		}
	}
	return array;
}
var array = [1,1,2,2,3,5,6,1,2,3,4,5,7,8,8,3,2,4,6,4,7,2,1,8,7,3,2,4];
//var array = ['siva', 'ram', 'kumar', 'anil', 'ram', 'sachin', 'siva', 'anil'];
//var array = [1,2,3,4,1];
removeDuplicate(array);
console.log(array);