'use strict';
/*
  Problem Statement:
  Merge two sorted arrays
 */

 function merge(array1, array2) {
 	var merged = [];
 	for(var i = 0, j = 0; i < array1.length;) {
 		if(i === array1.length || j === array2.length) {
 			break;
 		}
 		if(array1[i] < array2[j]) {
 			merged.push(array1[i]);
 			i++;
 		} else {
 			merged.push(array2[j]);
 			j++;
 		}
 	}
 	if(j <= array2.length) {
 		[].push.apply(merged, array2.splice(j));
 	}
 	if(i <= array1.length) {
 		[].push.apply(merged, array1.splice(i));
 	}
 	return merged;
 }

 var array1 = [2, 4, 6, 8];
 var array2 = [1, 3, 9, 11];

 var merged = merge(array1, array2);
 console.log(merged);

