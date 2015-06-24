/*
  Problem Statement : 
  Write your own array.pop function
  Pop function removes the last element of the array and
  returns that element
  For more info visit MDN: http://mzl.la/1fBW04O
*/
'use strict';
Array.prototype.myPop = function() {
  var lastElement = undefined;
  if(this.length > 0) {
    var lastElement = this[this.length-1];
    this.length -= 1;
  }
  return lastElement;
}
var myArray = [1];
var poppedElem = myArray.myPop();
console.log('Values in Array ', myArray);
console.log('Popeed element', poppedElem);