'use strict';
/*
  Problem Statement
  make the following statements work
  add(2, 5); // 7
  add(2)(5); // 7
*/
function add() {
  var total = add.currentTotal || 0;
  for(var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  add.currentTotal = total;
  //console.log(total);
  return add;
}

var check = add(5,2)(3);
console.log(check.currentTotal);