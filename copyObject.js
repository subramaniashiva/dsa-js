'use strict';
/*
	Problem Statement: Copy an object into another object
*/

function copyObject(source, destination) {
	for(var i in source) {
		if(typeof source[i] !== 'object') {
			destination[i] = source[i];
		} else {
			if(Array.isArray(source[i])) {
				destination[i] = destination[i] || [];
			} else {
				destination[i] = destination[i] || {};
			}
			copyObject(source[i], destination[i]);
		}
	}
	return destination;
}

var parent = {
	"test": [{
			"a": [1, 2, 3]
		}, {
			"b": [4, 5, 6]
		}, {
		"c": [7, 8, 9]
		}
	],
	"ok": 5,
	"tree": {"child": true}
};
var child = {};

copyObject(parent, child);
console.log(child);

