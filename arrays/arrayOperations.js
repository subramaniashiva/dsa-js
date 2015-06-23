'use strict';
console.log('Array operations');
var prompt = require('prompt');
var myArray = [];
console.log('Enter size of Array');
prompt.start();
prompt.get('number', function(err, arraySize) {
    function getAnother() {
        prompt.get('number', function(err, result) {
            if (err) done();
            else {
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

function done() {
    console.log('Done');
}

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

            }
        }
    });
}