/*
  Problem Statement : 
  Write your own array.sort function
  The sort() method sorts the elements of an array in place
  This function returns the modified array.
  For more info visit MDN: http://mzl.la/1eGszhb
*/
'use strict';
Array.prototype.mySort = function(compareFunction) {
    var temp, i, j;
    // If there is no compare function, convert array elements to string and sort
    if (!compareFunction) {
        compareFunction = function(a, b) {
            if (a.toString() > b.toString()) {
                return 1;
            } else if (a.toString() < b.toString()) {
                return -1;
            } else {
                return 0;
            }
        }
    }
    // Fix me: Not an efficient algorithm to sort
    for (i = 0; i < this.length; i++) {
        for (j = i + 1; j < this.length; j++) {
            // Swap the elements only if compare functions return 1 or more
            if (compareFunction(this[i], this[j]) > 0) {
                temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}
var myArray = [1,23, 24, 5, 2, 1];
function numberCompare(a, b) {
  return a - b;
}
myArray.mySort(numberCompare);
console.log('Values in Array ', myArray);