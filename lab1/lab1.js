// CS 546
// Zachary Shakked
// I pledge my honor that I've abided by the Stevens Honor Code.


function sumOfSquares(num1, num2, num3) {
	
	if (typeof num1 != 'number') {
		throw 'sumOfSquares: First argument is not a number.';
	}

	if (typeof num2 != 'number') {
		throw 'sumOfSquares: Second argument is not a number.';
	}

	if (typeof num3 != 'number') {
		throw 'sumOfSquares: Third argument is not a number.';
	}

	return (num1 * num1) + (num2 * num2) + (num3 * num3);
}

function sayHelloTo(firstName, lastName, title) {

	if (firstName && lastName && title) {
		
		if (typeof firstName != 'string' || typeof lastName != 'string' || typeof title != 'string') {
			throw 'sayHelloTo: One of your arguments is not a string.';
		}

		console.log('Hello, ' + title + ' ' + firstName + '' + lastName + '! Have a good evening!');
		return;
	}

	if (firstName && lastName) {
		
		if (typeof firstName != 'string' || typeof lastName != 'string') {
			throw 'sayHelloTo: One of your arguments is not a string.';
		}

		console.log('Hello, ' + firstName + ' ' + lastName + '. I hope you are having a good day!');
		return;	
	}

	if (firstName) {
		
		if (typeof firstName != 'string') {
			throw 'sayHelloTo: One of your arguments is not a string.';
		}

		console.log('Hello, ' + firstName + '!');
		return;
	}

	throw 'No names provided.';
}

function cupsOfCoffee(howManyCups) {

	if (typeof howManyCups != 'number') {
		throw 'cupsOfCoffee: Your argument is not a number.';
	}

	if (howManyCups < 0) {
		throw 'cupsOfCoffee: You must enter a number greater than zero.';
	}

	if (howManyCups == 0) {
		return '';
	}

	var cupOrCups = cupsString(howManyCups);
	var cupOrCupsMinusOne = cupsString(howManyCups - 1);

	var string = '';
	string += cupOrCups  + ' on the desk! ' + cupOrCups + '!';
	string += '\n';
	string += 'Pick one up, drink the cup, ' + cupOrCupsMinusOne + ' on the desk!';
	string += '\n\n';

	return string + cupsOfCoffee(howManyCups - 1);
}

function cupsString(numberOfCups) {
	if (numberOfCups > 1) {
		return numberOfCups + ' cups of coffee';
	}

	if (numberOfCups == 1) {
		return numberOfCups + ' cup of coffee';
	}

	if (numberOfCups == 0) {
		return 'no more coffee left'
	}
}

function occurrencesOfSubstring(fullString, substring) {
	if (typeof fullString != 'string' || typeof substring != 'string') {
		throw 'occurrencesOfSubstring: One of your arguments is not a string.';
		return;
	}

	var count = 0;
	for (var i = 0; i < fullString.length; ++i) {
		if (fullString.substring(i, i + substring.length) == substring) {
			count++;
		}
	}
	return count;
}

function randomizeSentences(paragraph) {
	if (typeof paragraph != 'string') {
		throw 'randomizeSentences: Your argument is not a string.';
	}
	var result = paragraph.match( /[^\.!\?]+[\.!\?]+/g );
	if (result) {
		randomizeArray(result);
		return result.join(' ');	
	} else {
		return paragraph;
	}
	

}	

function randomizeArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


console.log('sumOfSquares(5,3,10): ' + sumOfSquares(5,3,10));
console.log('sumOfSquares(2,2,2): ' + sumOfSquares(2,2,2));
console.log('sumOfSquares(3,6,9): ' + sumOfSquares(3,6,9));
console.log('sumOfSquares(5,5,0): ' + sumOfSquares(5,5,0));
console.log('sumOfSquares(1,2,-3): ' + sumOfSquares(1,2,-3));



try {
	sayHelloTo();
} catch (err) {
	console.log(err);
}
sayHelloTo("Phil");
sayHelloTo("Phil", "Barresi");
sayHelloTo("Phil", "Barresi", "Mr.");

console.log('\n');

console.log(cupsOfCoffee(5));

console.log('\n');

console.log(occurrencesOfSubstring('Helllllllo, class!', 'll'));
console.log(occurrencesOfSubstring('ihi hi hi', 'hi'));

var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
console.log(randomizeSentences(paragraph));

console.log('\n');

var paragraph2 = "My name is zach. I like to code. Coding is fun. Do you like to code? I love it! It is so much fun.";

console.log(randomizeSentences(paragraph2));
console.log(randomizeSentences(paragraph2));
console.log(randomizeSentences(paragraph2));

randomizeSentences(null);



