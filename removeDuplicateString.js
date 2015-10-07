'use strict';
/*
  Problem Statement
  Remove Duplicate Characters in String
*/
function removeDuplicateChars(string) {
	var result, matched = [];
	if(string.length > 1) {
		result = '';
		for(var i = 0; i < string.length; i++) {
			if(matched.indexOf(i) === -1) {
				for(var j = i+1; j < string.length; j++) {
					if(matched.indexOf(j) === -1 && string[i] === string[j]) {
						matched.push(j);
					}
				}
				result += string[i];
			}
		}
	}
	return result;
}

var str = 'sivasivasiva';
str = removeDuplicateChars(str);
console.log(str);