
exports.triangle = function(numberOfLines) {
	
	if (numberOfLines <= 0 || typeof numberOfLines != 'number') {
		return;
	}

	numberOfLines = Math.floor(numberOfLines);
	
	var numberOfSpaces = numberOfLines - 1; 
	var numberOfIndendationSpaces = Math.ceil(numberOfLines);

	for (var i = 0; i < (numberOfLines - 1); ++i) {		
		var indentation = spaces(numberOfIndendationSpaces--);
		console.log(indentation + '/' + spaces(i * 2) + '\\');
	}

	var widthOfBase = i * 2;
	console.log(' /' + horizontalLine(widthOfBase) + '\\');
}


exports.square = function(numberOfLines) {

	if (numberOfLines <= 1 || typeof numberOfLines != 'number') {
		return;
	}

	numberOfLines = Math.floor(numberOfLines);

	var width = numberOfLines;
	var horizontalSide = '|' + horizontalLine(numberOfLines) + '|';
	console.log(horizontalSide);
	
	for (var i = 0; i < (numberOfLines - 2); ++i) {
		console.log('|' + spaces(numberOfLines) + '|');
	}
	console.log(horizontalSide);
}

exports.rhombus = function(numberOfLines) {

	if (numberOfLines <= 1 || typeof numberOfLines != 'number' || numberOfLines % 2 != 0) {
		console.log('Invalid input. You must provide an even number.')
		return;
	}

	numberOfLines = Math.floor(numberOfLines);
	
	var numberOfSpaces = numberOfLines - 1; 
	var numberOfIndendationSpaces = Math.floor(numberOfLines / 2.0);

	var top = spaces(numberOfIndendationSpaces + 2) + '/-\\';
	var bottom = spaces(numberOfIndendationSpaces + 2) + '\\-/';

	var width = (numberOfLines - 1) / 2;

	console.log(top);

	for (var i = 1; i < width; ++i) {		
		
		var indentation = spaces(numberOfIndendationSpaces + 1);
		numberOfIndendationSpaces -= 1;
		console.log(indentation + '/' + spaces(i * 2 + 1) + '\\');
	}

	numberOfIndendationSpaces += 2;

	for (var i = width; i > 1; --i) {		
		var indentation = spaces(numberOfIndendationSpaces++);
		console.log(indentation + '\\' + spaces(i * 2 ) + '/');
	}

	console.log(bottom);
}


function spaces(numberOfSpaces) {
	var spaces = '';
	for (var i = 0; i < numberOfSpaces; ++i) {
		spaces += ' '; 
	}
	return spaces;
}

function horizontalLine(width) {
	var horizontalLine = '';
	for (var i = 0; i < width; ++i) {
		horizontalLine += '-';

	}
	return horizontalLine;
}
