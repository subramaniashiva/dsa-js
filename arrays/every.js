/*
  Problem Statement : 
  Write your own array.every function
  The every() method tests whether all elements in the array 
  pass the test implemented by the provided function.
  For more info visit MDN: http://mzl.la/1eN9HNy
*/
'use strict';
Array.prototype.myEvery = function(callBack, thisArg) {
  var len, i;
    if (typeof callBack !== 'function') {
        throw new TypeError();
    }
    len = this.length;
    for (i = 0; i < len; i++) {
        // If the callBack function returns false,
        // break the loop and return false
        if (this[i] !== undefined && !callBack.call(thisArg, this[i], i, this)) {
            return false;
        }
    }
    return true;
}
// Callback function checks whether all elements are less than 6
function checkSmaller(element, index, array) {
    if (element < 6) {
        return true;
    } else {
        return false;
    }
}
var myArray = [1, 2, 3, 4, 5];
var result = myArray.myEvery(checkSmaller);
console.log('Values in Array ', myArray);
console.log('All number less than 6? ', result);