const rest = require('./lib/rest');
const readability = require('./readability/calculations');

module.exports.hello = (event, context, callback) => {
	const response = rest.response(200, 'Version: v1.0', '/');
	callback(null, response);

	// Use this code if you don't use the http event with the LAMBDA-PROXY integration
	// callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.getEpoch = (event, context, callback) => {
	const epoch = Math.round((new Date().getTime() / 1000.0) + 30); // in seconds
	console.info(`Epoch: ${epoch}`);
	const response = rest.response(200, { epoch }, '/epoch');
	callback(null, response);
};

module.exports.fkReadability = (event, context, callback) => {
	const data = JSON.parse(event.body);
	const readingBurden = readability.fleschKincaid(data.text);
	const response = rest.response(200, {
		readingBurden,
		text: data.text,
	}, '/flesch-kincaid');
	callback(null, response);
};
