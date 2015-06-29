/*
  Problem Statement : 
  Write your own array.concat function
  Concat function concatenates the arguments passed to the array being called.
  This function returns new array.
  For more info visit MDN: http://mzl.la/1eVzgwK
*/
'use strict';
Array.prototype.myConcat = function() {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        result[i] = this[i];
    }
    for (var i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            Array.prototype.push.apply(result, arguments[i]);

        } else {
            result.push(arguments[i]);
        }
    }
    return result;
}
var myArray = [1, 2, 3];
var concatArray = myArray.myConcat([4, 5, 6], 0, [7, 8, 9]);
console.log('Values in Array ', myArray);
console.log('New Concatenated Array ', concatArray);