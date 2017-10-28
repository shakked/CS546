exports.simplify = (text) => {

	if (text == null || text == undefined || typeof text != 'string') {
		throw 'Input must be a string';
	}
	
	return text.toLowerCase()
	.replace(/[^0-9a-z]/gi, ' ')
	.replace(/\s\s+/g, ' ');

}

exports.createMetrics = (text) => {

	if (text == null || text == undefined || typeof text != 'string') {
		throw 'Input must be a string';
	}


	const simplifiedText = exports.simplify(text);
	const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	const totalLetters = simplifiedText.split('').filter((character) => { return alphabet.includes(character) }).length;

	const words = simplifiedText.split(' ');
	const totalWords = words.length;

	let uniqueWordSet = new Set();
	words.forEach((word) => {
		uniqueWordSet.add(word);
	})

	const uniqueWords = uniqueWordSet.size;
	const longWords = words.filter((word) => { return word.length >= 6 }).length;

	const averageWordLength = words.reduce((a, b) => { return a + b.length }, 0) / words.length;

	let wordOccurrences = {};
	words.forEach((word) => {
		wordOccurrences[word] = wordOccurrences[word] == null ? 1 : wordOccurrences[word] + 1; 
	});

	return {
		totalLetters: totalLetters,
		totalWords: totalWords,
		uniqueWords: uniqueWords,
		longWords: longWords,
		averageWordLength: averageWordLength,
		wordOccurrences: wordOccurrences,
	}
}