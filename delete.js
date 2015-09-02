'use strict';
/*
  Problem Statement
  Explain delete in JavaScript
*/

var myArray = [1,2,3,4,5];
delete myArray[0];
// Delete does not affect the lenght of array
console.log(myArray, myArray.length);