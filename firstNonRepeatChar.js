'use strict';
/*
  Problem statement
  Find the first non repeating character in a string
*/

function firstNonRepeat(string) {
  var index = -1,
      indexSet = false,
      repeated = false,
      ignoreIndex = [];
  if (string && string.length > 1) {
    if(string.length < 3) {
      return 0;
    }
    for (var i = 0; i < string.length; i++) {
      if (ignoreIndex.indexOf(i) !== -1) {
          continue;
      } else {
          repeated = false;
          for (var j = i + 1; j < string.length; j++) {
              console.log('comparing ', string[i], string[j]);
              if (ignoreIndex.indexOf(j) !== -1) {
                  continue;
              }
              if (string[i] === string[j]) {
                  // Since this charater is repeated, there is no need for comparing
                  // this value with any other value in further loops
                  // so add it to ignore list
                  ignoreIndex.push(j);
                  // This flag determines whether the loop ends by break statement below
                  // or exceeding the length of string index
                  repeated = true;
                  break;
              }
          }
          if (!indexSet && !repeated) {
              index = i;
              // This is the first non-repeating characted
              // So no need to set the index again
              indexSet = true;
              repeated = false;
          }
      }
    }
  }
  console.log('index is ', index);
  return index;
}
var string = 'asdfghasdfghl';
var index = firstNonRepeat(string);
console.log('First non repeating char is ', string[index]);
