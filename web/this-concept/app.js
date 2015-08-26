//'use strict';
/*
  Problem Statement
  Explain this using simple program
*/

function Person(name, age) {
  this.name = name;
  this.age = age; 
  this.toString = function() {
    return 'Name is ' + this.name + '. Age is ' + this.age;
  }
}

var personObj = new Person('Siva', 20);
console.log(personObj.toString());

var faultyObj = Person('John', 30);
console.log(faultyObj);
console.log(this.name);