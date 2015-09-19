'use strict';
/*
  Problem Statement
  Explain promises using simple program
*/
var fs = require('fs');

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
		console.log('File Contents: ', res);
	}
}
console.log('\nAsynchronous file read');
console.log('Some operation before file read');
readJSONAsync('data.json', callbackAsync);
console.log('Some operation after file read');
