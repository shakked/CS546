// Zachary Shakked
// I pledge my honor that I've abided by the Stevens Honor Code.
// Lab 3

const files = require('./fileData'),
	textMetrics = require('./textMetrics');

var Promise = require("bluebird");
var fs = Promise.promisifyAll(require('fs'))



async function execute(fileName) {

	if (fileName == null || fileName == undefined || typeof fileName != 'string') {
		throw 'Input must be a fileName with an extension and a string';
	}


	const fileWithoutExtension = fileName.split('.')[0];

	const exists = fs.existsSync(`${fileWithoutExtension}.result.json`);

	if (exists) {

		return await files.getFileAsJSON(`${fileWithoutExtension}.result.json`);

  	} else {

		const text = await files.getFileAsString(fileName);
		const simplifiedText = textMetrics.simplify(text);
		var succeeded = await files.saveStringToFile(`${fileWithoutExtension}.debug.txt`, simplifiedText);
		const str = await files.getFileAsString(`${fileWithoutExtension}.debug.txt`);
		const metrics = textMetrics.createMetrics(str);
		succeeded = await files.saveJSONToFile(`${fileWithoutExtension}.result.json`, metrics);
		return await files.getFileAsJSON(`${fileWithoutExtension}.result.json`);

  	}
	
}





execute('chapter1.txt').then((jsonObject) => {
	
	// console.log(JSON.stringify(jsonObject, null, 4));
	return execute('chapter2.txt');

}).then((jsonObject) => {
	
	// console.log(JSON.stringify(jsonObject, null, 4));
	return execute('chapter3.txt');

}).then((jsonObject) => {
	// console.log(JSON.stringify(jsonObject, null, 4));

}).catch((err) => {

	console.log('errOR:', err);

});

