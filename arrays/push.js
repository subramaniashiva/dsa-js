/*
  Problem Statement : 
  Write your own array.push function
  Push function takes an element or set of elements and
  append it to the end of the array. 
  This function returns the new length of the array.
  For more info visit MDN: http://mzl.la/1TNkesw
*/
'use strict';
Array.prototype.myPush = function() {
  // Add an element to the end of the array
  for(var i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
}
var myArray = [1,2];
var newLength = myArray.myPush(3,4,5);
console.log('Values in Array ', myArray);
console.log('New Length', newLength);