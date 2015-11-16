'use strict';
/*
  Problem Statement:
  Generate all consecutive combinations of a string
*/
function generateCombinations(input) {
    var output = [],
        count = 0, temp = '';
    if (input) {
        for (var i = 0; i < input.length; i++) {
            count = 0;
            while (count < input.length - i) {
              temp = input.substr(i, count+1);
              output.push(temp);
              temp = '';
              count++;
            }
        }
    }
    return output;
}

var input = 'siva';
console.log(generateCombinations(input));
