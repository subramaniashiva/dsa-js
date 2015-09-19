'use strict';
/*
  Problem Statement
  Explain promises using simple program
*/
var fs = require('fs');
var Promise = require('promise');

// This is a synchronous version of file read.
// This function is not very helpful. Let's convert this to asynchronous soon
function readJSONSync(filename) {
	return JSON.parse(fs.readFileSync(filename, 'utf-8'));
}
// The following statements will be executed in sequence
console.log('Synchronous file read');
console.log('Some operation before file read');
var resultObj = readJSONSync('data.json');
console.log(resultObj);
console.log('Some operation after file read');

// This is an asynchronous version of file read
// This functon is also not very hellpful as it will be
// difficult to manage multiple callbacks
function readJSONAsync(filename, callback) {
	fs.readFile(filename, 'utf-8', function(err, res) {
		if(err) {
			callback(err);
		} else {
			callback(null, JSON.parse(res));
		}
	})
}
// Callback function to be called once the file is read
function callbackAsync(err, res) {
	if(err) {
		console.log('Oops, something went wrong. '+ err);
	} else {
		console.log('File Contents from Async read: ', res);
	}
}
console.log('\nAsynchronous file read');
console.log('Some operation before file read');
readJSONAsync('data.json', callbackAsync);
console.log('Some operation after file read');

// We change the file read function to return Promise
// Using the returned Prmoise object, we can use 'then'
// to execute the success or failure function
function readJSONPromise(filename) {
	return new Promise(function(fulfill, reject) {
		fs.readFile(filename, 'utf-8', function(err, res) {
      try {
        if(err) {
          reject(err);
        }
        fulfill(res);
      } catch (e) {
        reject(err);
      }
    });
	});
}

console.log('\nAsynchronous file read using Promise');
console.log('Some operation before file read');
var promiseObj = readJSONPromise('data.json');
// Uncomment the below line to trigger the reject state of promise
// var promiseObj = readJSONPromise('errorFile.json');
console.log('Some operation after file read');
console.log('File contents from Promise read: ');
promiseObj.then(console.log, console.error);