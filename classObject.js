'use strict';
/*
  Problem Statement
  Create classes and objects in JavaScript uing functions
*/
console.log('Class Object concept in JavaScript');
function ElectronicDevice() {

}
// prototype is the property of a function
// Whenever a new object is instantiated from this function
// The properties and methods that are in prototype
// will be considered as the own property/function of that object
ElectronicDevice.prototype.name = 'Electronic Device';
ElectronicDevice.prototype.toString = function() {
  return this.name;
}
function Mobile() {
  this.name = 'Mobile';
  this.type = 'Touch';
  this.os = 'Android';
}
Mobile.prototype = new ElectronicDevice();

var moto = new Mobile();
moto.name = 'Motorola';
console.log(moto.toString());
