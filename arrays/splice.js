/*
  Problem Statement : 
  Write your own array.splice function
  The splice() method changes the content of an array 
  by removing existing elements and/or adding new elements.
  This function return an array containing the deleted elements.
  If only one element is removed, an array of one element is returned.
  If no elements are removed, an empty array is returned.
  For more info visit MDN: http://mzl.la/1wiozFI
*/
'use strict';
Array.prototype.mySplice = function() {
    var resultArray = [];
    var begin = arguments[0],
        numOfElems;
    if (typeof begin === 'undefined') {
        begin = 0;
    } else if (begin < 0) {
        begin = this.length + begin;
    }
    if (arguments[1]) {
        numOfElems = arguments[1];
    }
    if (numOfElems > 0) {
        for (var i = begin, j = 0;
            (j < numOfElems && i < this.length); i++, j++) {
            resultArray.push(this[i]);
            this[i] = this[i + numOfElems];
        }
        this.length -= numOfElems;
    }
    return resultArray;
}
var myArray = [1, 2, 3, 4, 5, 6, 7];
var newArray = myArray.mySplice(-6, 3);
//var newArray = myArray.splice(-6, 3);
console.log('Values in Array ', myArray);
console.log('Sliced Array ', newArray);