// Zachary Shakked
// CS546 Lab 2
//
// I pledge my honor that I've abided by the Stevens Honor Code.

var printShape = require('./printShape.js');

// Triangles

padding('triangle(0)');
printShape.triangle(0);

padding('triangle(-1)');
printShape.triangle(-1);

padding('triangle(1)');
printShape.triangle(1);

padding('triangle(2)');
printShape.triangle(2);

padding('triangle(3)');
printShape.triangle(3);

padding('triangle(7)');
printShape.triangle(7);

padding('triangle(12)');
printShape.triangle(12);

padding('triangle(15)');
printShape.triangle(15);

padding('triangle(4)');
printShape.triangle(4);

padding('triangle(3)');
printShape.triangle(3);

// Squares

padding('square(0)');
printShape.square(0);

padding('square(-1)');
printShape.square(-1);

padding('square(1)');
printShape.square(1);

padding('square(2)');
printShape.square(2);

padding('square(3)');
printShape.square(3);

padding('square(7)');
printShape.square(7);

padding('square(12)');
printShape.square(12);

padding('square(15)');
printShape.square(15);

padding('square(4)');
printShape.square(4);

padding('square(3)');
printShape.square(3);

// Rhombi

padding('rhombus(0)');
printShape.rhombus(0);

padding('rhombus(-1)');
printShape.rhombus(-1);

padding('rhombus(2)');
printShape.rhombus(2);

padding('rhombus(4)');
printShape.rhombus(4);

padding('rhombus(6)');
printShape.rhombus(6);

padding('rhombus(8)');
printShape.rhombus(8);

padding('rhombus(10)');
printShape.rhombus(10);

padding('rhombus(12)');
printShape.rhombus(12);

padding('rhombus(4)');
printShape.rhombus(4);

padding('rhombus(2)');
printShape.rhombus(2);






function padding(name) {
	console.log('\n');
	console.log(name + ':');
}