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
// When initializing an object with 'new' keyword, 'this' inside the constructor
// refers to the newly created object
var personObj = new Person('Siva', 20);
console.log('Calling the method from an object created using constructor: ', personObj.toString());
// If you miss the 'new' keyword while initializing an object, 'this' inside the constructor
// refers to the scope where the new object is created.
// In our case it polluts the global name space
var faultyObj = Person('John', 30);
console.log(faultyObj);
console.log('Faulty Object polluting global namespace: ', this.name);

var obj = {
  address: 'default address',
  print: function() {
    console.log(this.address);
  }
};
// When you call the method using an object, 'this' inside the method
// refers to the object
console.log('Calling an object\'s method: ');
obj.print();

var parentObj = {
  childObj: {
    age: 'ChildObj',
    print: function() {
      console.log(this.address);
    }
  }
}
console.log('Calling a nested object\'s method: ');
parentObj.childObj.address();
// When you store the reference to the function in a variable, and call the variable later
// 'this' in the emthod refers to the scope of the variable.
// In our case, it refers to the global name space
var referenceFunction = obj.address;
console.log('Calling a reference function: ');
referenceFunction();