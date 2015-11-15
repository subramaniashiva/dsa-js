function Shape() {
	this.name = 'shape';
	this.toString = function() {
		return "Shape is " + this.name;
	}
}

function TwoD() {
	this.name = '2D Shape';
}
TwoD.prototype = new Shape();
TwoD.prototype.constructor = TwoD;

function Triangle(a, b, c) {
	this.name = 'Triangle';
	this.a = a;
	this.b = b;
	this.c = c;
}

Triangle.prototype = new TwoD();
Triangle.prototype.constructor = Triangle;

var triangleObj = new Triangle(1, 2, 3);
console.log(triangleObj.toString());
console.log(triangleObj.constructor);