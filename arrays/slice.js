/*
  Problem Statement : 
  Write your own array.slice function
  The slice method returns a shallow copy of a portion of an array 
  into a new array object.
  This function returns the new array.
  For more info visit MDN: http://mzl.la/1NvcMxl
*/
'use strict';
Array.prototype.mySlice = function(begin, end) {
  var resultArray = [];
  if(typeof begin === 'undefined') {
    begin = 0;
  }
  if(begin < 0) {
    begin = this.length + begin;
    // If the value is still a negative value, 
    // then the user given index falls outside the length of array.
    // So set it to zero
    begin = Math.max(begin, 0);
  }
  end = end || (this.length);
  if(end < 0) {
    end = this.length + end;
  }
  for(var i = begin; i < end; i++) {
    resultArray.push(this[i]);
  }
  return resultArray;
}
var myArray = [1, 2, 3, 4, 5];
var newArray = myArray.mySlice(-3, -1);
var origSlice = myArray.slice(-3, -1);
console.log('Values in Array ', myArray);
console.log('Sliced Array ', newArray);
console.log('Original Slice ', origSlice);