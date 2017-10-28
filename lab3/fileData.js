const bluebird = require('bluebird');
const Promise = bluebird.Promise;

// We use bluebird to make a copy of fs
// that has all its normal methods, and
// {methodName}Async method versions that return
// promises as well; ie, you will have a copy
// of fs with fs.stat(path, callback) and
// fs.statAsync(path), which returns a promise
// thus allowing us to await it.
const fs = bluebird.promisifyAll(require("fs"));


exports.getFileAsString = async (path) => {
	
	if (path == null || path == undefined || typeof path != 'string' ) {
		throw 'Input must be a file path.';
	}

	return await fs.readFileAsync(path, 'utf-8');
};

exports.getFileAsJSON = async (path) => {


	if (path == null || path == undefined || typeof path != 'string' ) {
		throw 'Input must be a file path.';
	}

	const data = await fs.readFileAsync(path, 'utf-8');
	const json = JSON.parse(data);

	return json;
};

exports.saveStringToFile = async (path, text) => {

	if (path == null || path == undefined || typeof path != 'string' ) {
		throw '1st input must be a file path.';
	}

	if (text == null || text == undefined || typeof text != 'string' ) {
		throw '2nd input must be a string';
	}

	return await fs.writeFileAsync(path, text);
};	

exports.saveJSONToFile = async (path, obj) => {

	if (path == null || path == undefined || typeof path != 'string' ) {
		throw '1st input must be a file path.';
	}

	if (obj == null || obj == undefined || typeof obj != 'object' ) {
		throw '2nd input must be an object';
	}

	return await fs.writeFileAsync(path, JSON.stringify(obj, null, 4))
};
