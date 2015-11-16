'use strict';
/*
  Problem Statement:
  Convert letters in the word in alphabetical order
*/
function convertAlphabetOrder(word) {
	var output, temp;
	output = word.split('');
	for(var i = 0; i < output.length; i++) {
		for(var j = i+1; j < output.length; j++ ) {
			if(output[i] > output[j]) {
				temp = output[i];
				output[i] = output[j];
				output[j] = temp;
			}
		}
	}
	output = output.join('');
	return output;
}

var input = 'siva';
console.log(convertAlphabetOrder(input));