/*
  Problem Statement : 
  Write your own array.forEach function
  The forEach() method executes a provided function once per array element. 
  This function does not modify the array and return undefined always.
  For more info visit MDN: http://mzl.la/IysHjg
*/
'use strict';
Array.prototype.myforEach = function(callback, thisArg) {
    var that = deepCopy(this);
    for (var i = 0; i < that.length; i++) {
        callback.call(thisArg, that[i], i, this);
    }
}
// Function to deep copy an object. By default objects are copied by reference.
function deepCopy(obj) {
    var out, i, len;
    // If it is an array, create a new array and copy elements one by one
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        out = [];
        len = obj.length;
        for (i = 0; i < len; i++) {
            // If it is a multi dimensional array then obj[i] will be an array
            // So call the function again with obj[i];
            out[i] = deepCopy(obj[i]);
        }
        return out;
    } else if (typeof obj === 'object') {
        out = {};
        for (i in obj) {
            // If out[i] is an array or object, call the function again
            out[i] = deepCopy(obj[i]);
        }
        return out;
    }
    // If it is not an array or object, then it is a primitive type.
    // So just return that value
    return obj;
}
var myArray = [1, 2, 3, 4, 5];

function print(element, index, array) {
    console.log('Current element is ', element);
    console.log('Current index is ', index);
    console.log('Array is ', array);
    // Even though the array is modified, 
    // the foreach function sees only the original array. Hence we used deep copy
    array.push(6);
}
myArray.myforEach(print);
//myArray.forEach(print);
console.log('Values in Array ', myArray);