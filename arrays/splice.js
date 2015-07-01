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
        numOfElems, i, j;
    // Assign the value of beginning index from which the array will be spliced
    if (typeof begin === 'undefined') {
        begin = 0;
    } else if (begin < 0) {
        begin = this.length + begin;
        // If the value is still a negative value, 
        // then the user given index falls outside the length of array.
        // So set it to zero
        begin = Math.max(begin, 0);
    }
    // If the number of elements to be spliced is not given, assume its till the
    // end of the array
    if (typeof arguments[1] !== 'undefined' || typeof arguments[1] !== 'null') {
        numOfElems = arguments[1];
    } else {
        numOfElems = this.length - begin;
    }
    // If there are elements to be removed, remove it first
    // And change the length of array
    if (numOfElems > 0) {
        for (i = begin, j = 0;
            (j < numOfElems && i < this.length); i++, j++) {
            resultArray.push(this[i]);
            this[i] = this[i + numOfElems];
        }
        this.length -= numOfElems;
    }
    // If there are elements to be added, add it to the element
    var insertElems = Array.prototype.slice.call(arguments, 2);
    if (insertElems.length) {
        var tempArray = this.slice(begin);
        this.length -= tempArray.length;
        Array.prototype.push.apply(this, insertElems);
        Array.prototype.push.apply(this, tempArray);
    }
    return resultArray;
}
var myArray = [1, 2, 3, 4, 5, 6, 7];
var newArray = myArray.mySplice(3, 0, 12, 13, 14, 15, 16);
//var newArray = myArray.splice(3, 0, 12, 13, 14, 15, 16);
console.log('Values in Array ', myArray);
console.log('Sliced Array ', newArray);