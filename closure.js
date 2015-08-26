'use strict';
/*
  Problem Statement
  Explain closure using simple program
*/

var myApp = (function(){
  // Closure variable available to functions even after the 
  // main function is executed
  var name = '';
  return {
    getName: function() {
      return name;
    },
    setName: function(param) {
      name = param;
    }
  }
})();

console.log('Name initially: ', myApp.getName());
myApp.setName('Siva');
console.log('Name after setting a different value: ', myApp.getName());