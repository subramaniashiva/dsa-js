'use strict';
/*
  Problem Statement
  Explain promises using simple program
*/
var fs = require('fs');
function readJSONSync(filename) {
	return JSON.parse(fs.readFileSync(filename, 'utf-8'));
}

var resultObj = readJSONSync('data.json');
console.log(resultObj);