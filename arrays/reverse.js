/*
  Problem Statement : 
  Write your own array.reverse function
  The reverse() method reverses an array in place. 
  The first array element becomes the last and the last becomes the first.
  This function returns the modified array.
  For more info visit MDN: http://mzl.la/1UB0jxs
*/
'use strict';
Array.prototype.myReverse = function() {
    var temp, i;
    if (this.length > 1) {
        for (i = 0; i < this.length / 2; i++) {
            temp = this[i];
            this[i] = this[this.length - 1 - i];
            this[this.length - 1 - i] = temp;
        }
    }
    return this;
}
var myArray = [1, 2, 3, 4, 5];
myArray.myReverse();
console.log('Values in Array ', myArray);