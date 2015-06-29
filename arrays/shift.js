/*
  Problem Statement : 
  Write your own array.shift function
  Shift function removes an element from the beginning of the array. 
  This function returns the removed element.
  For more info visit MDN: http://mzl.la/1LQVbPR
*/
'use strict';
Array.prototype.myShift = function() {
    var removed, i;
    if (this.length > 0) {
        removed = this[0];
        for (i = 0; i < this.length - 1; i++) {
            this[i] = this[i + 1];
        }
        this.length = this.length - 1;
    }
    return removed;
}
var myArray = [1];
var removedElem = myArray.myShift();
console.log('Values in Array ', myArray);
console.log('Removed Element', removedElem);