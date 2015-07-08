/*
  Problem Statement : 
  Write your own array.sort function
  The sort() method sorts the elements of an array in place
  This function returns the modified array.
  For more info visit MDN: http://mzl.la/1eGszhb
*/
'use strict';
Array.prototype.mySort = function(compareFunction) {
    var temp;
    if (!compareFunction) {
        compareFunction = function(a, b) {
            if (a.toString() > b.toString()) {
                return -1;
            } else if (a.toString() > b.toString()) {
                return 1;
            } else {
                return 0;
            }
        }
    }
    // Fix me: Not an efficient algorithm to sort
    for (var i = 0; i < this.length; i++) {
        for (var j = i + 1; j < this.length; j++) {
            if (compareFunction(this[i], this[j]) < 0) {
                temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}
var myArray = [20, 1, 2, 3, 4];
function numberCompare(a, b) {
  return b - a;
}
myArray.mySort(numberCompare);
console.log('Values in Array ', myArray);