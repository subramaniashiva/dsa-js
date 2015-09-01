'use strict';
/*
  Problem Statement
  Explain the diff between the below two:
  function myFunction() {}
  var myFunction = function() {}
*/

(function(){
  //The interpreter parses function names before attempting to execute any code, 
  // so that function can be able called before it's declared.
  myFunction();
  function myFunction() {
    console.log('Called the function ');
  }
})();

(function(){
  // This throws error as variables are just hoiseted
  // and this variable is not initialized with the function
  myFunction();
  var myFunction = function() {
    console.log('Called the function ');
  }
})();