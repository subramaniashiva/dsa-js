'use strict';
// This program creates classes and objects in JavaScript
console.log('Class Object concept in JavaScript');
function ElectronicDevice() {

}
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
