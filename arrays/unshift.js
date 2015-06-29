/*
  Problem Statement : 
  Write your own array.unshift function
  Unshift function takes an element or set of elements and
  append it to the beginning of the array. 
  This function returns the new length of the array.
  For more info visit MDN: http://mzl.la/1KdawwR
*/
'use strict';
Array.prototype.myUnshift = function() {
    // Arguments is not an array. Its an array like object.
    // Hence we borrow array's push method using apply
    [].push.apply(arguments, this);
    for(var i=0; i<arguments.length; i++) {
      this[i] = arguments[i];
    }
    return this.length;
}
var myArray = [3, 4, 5];
var newLength = myArray.myUnshift(1, 2);
console.log('Values in Array ', myArray);
console.log('New length', newLength);