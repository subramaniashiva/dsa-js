/*
  Problem Statement : 
  Get an array from user and store it.
  Perform the following operations on the array without iterating the array
  * Add an element to the end of the array
  * Add an element to the beginning of the array
  * Remove an element from the end of the array
  * Remove an element from the beginning of the array
*/
'use strict';
console.log('Array operations');
var prompt = require('prompt');
var myArray = [];
console.log('Enter size of Array');
// prmopting the user to enter the size of the array
prompt.start();
prompt.get('number', function(err, arraySize) {
    // This function gets user input for the array
    function getAnother() {
        prompt.get('number', function(err, result) {
            if (err) {
                console.log('Error in user input. ', err);
            } else {
                myArray.push(parseInt(result.number, 10));
                if (myArray.length < arraySize) {
                    getAnother();
                } else {
                    console.log('Your array is ', myArray);
                    doOperations();
                }
            }
        })
    }
    arraySize = parseInt(arraySize.number, 10);
    if (!isNaN(arraySize)) {
        console.log('Enter your numbers');
        prompt.start();
        getAnother();
    } else {
        console.log('Invalid input');
    }
});

function printArray() {
    console.log('Your array is ', myArray);
}

function doOperations() {
    console.log('What do you want to do?\n');
    console.log('1. Push a new element to array\n');
    console.log('2. Pop an element from array\n');
    console.log('3. Add a new element to the beginning of array\n');
    console.log('4. Remove the first element of array\n');
    prompt.start();
    prompt.get('number', function(err, result) {
        result = parseInt(result.number, 10);
        if (!isNaN(result)) {
            if (result == 1) {
                prompt.start();
                prompt.get('number', function(err, result) {
                    myArray.push(parseInt(result.number, 10));
                    printArray();
                    doOperations();
                });
            } else if (result == 3) {
                prompt.start();
                prompt.get('number', function(err, result) {
                    myArray.unshift(parseInt(result.number, 10));
                    printArray();
                    doOperations();
                });
            } else if (result == 2) {
                myArray.pop();
                printArray();
                doOperations();
            } else if (result == 4) {
                myArray.shift();
                printArray();
                doOperations();
            } else {
              console.log('Program ended');
            }
        }
    });
}