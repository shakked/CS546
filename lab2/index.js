// Zachary Shakked
// CS546 Lab 2
//
// I pledge my honor that I've abided by the Stevens Honor Code.

var printShape = require('./printShape.js');

// Triangles
// 1
padding('triangle(0)');
printShape.triangle(0);

// 2
padding('triangle(-1)');
printShape.triangle(-1);

// 3
padding('triangle(1)');
printShape.triangle(1);

// 4
padding('triangle(2)');
printShape.triangle(2);

// 5
padding('triangle(3)');
printShape.triangle(3);

// 6
padding('triangle(7)');
printShape.triangle(7);

// 7
padding('triangle(12)');
printShape.triangle(12);

// 8
padding('triangle(15)');
printShape.triangle(15);

// 9
padding('triangle(4)');
printShape.triangle(4);

// 10
padding('triangle(3)');
printShape.triangle(3);

// 11
padding('triangle(13)');
printShape.triangle(13);

// 12
padding('triangle(9)');
printShape.triangle(9);





// Squares
// 1
padding('square(0)');
printShape.square(0);

// 2
padding('square(-1)');
printShape.square(-1);

// 3
padding('square(1)');
printShape.square(1);

// 4
padding('square(2)');
printShape.square(2);

// 5
padding('square(3)');
printShape.square(3);

// 6
padding('square(7)');
printShape.square(7);

// 7
padding('square(12)');
printShape.square(12);

// 8
padding('square(15)');
printShape.square(15);

// 9
padding('square(4)');
printShape.square(4);

// 10
padding('square(8)');
printShape.square(8);

// 11
padding('square(9)');
printShape.square(9);

// 12
padding('square(10)');
printShape.square(10);

// 13
padding('square(11)');
printShape.square(11);




// Rhombi
// 1
padding('rhombus(0)');
printShape.rhombus(0);

// 2
padding('rhombus(-1)');
printShape.rhombus(-1);

// 3
padding('rhombus(2)');
printShape.rhombus(2);

// 4
padding('rhombus(4)');
printShape.rhombus(4);

// 5
padding('rhombus(6)');
printShape.rhombus(6);

// 6
padding('rhombus(8)');
printShape.rhombus(8);

// 7
padding('rhombus(10)');
printShape.rhombus(10);

// 8
padding('rhombus(12)');
printShape.rhombus(12);

// 9
padding('rhombus(14)');
printShape.rhombus(14);

// 10
padding('rhombus(16)');
printShape.rhombus(16);

// 11
padding('rhombus(18)');
printShape.rhombus(18);

// 12
padding('rhombus(20)');
printShape.rhombus(20);

// 13
padding('rhombus(22)');
printShape.rhombus(22);





function padding(name) {
	console.log('\n');
	console.log(name + ':');
}