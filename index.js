const rest = require('./utils/rest');
const readability = require('./readability/calculations');
const readabilityScore = require('./readability/saveScore');

module.exports.hello = (event, context, callback) => {
	console.info('hello');
	const response = rest.response(200, 'Version: v1.0', '/');
	callback(null, response);

	// Use this code if you don't use the http event with the LAMBDA-PROXY integration
	// callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.getEpoch = (event, context, callback) => {
	console.info('getEpoch');
	const epoch = Math.round((new Date().getTime() / 1000.0) + 30); // in seconds
	console.info(`Epoch: ${epoch}`);
	const response = rest.response(200, { epoch }, '/epoch');
	callback(null, response);
};

module.exports.fkReadability = (event, context, callback) => {
	console.info('fkReadability');
	const data = JSON.parse(event.body);
	const readingBurden = readability.fleschKincaid(data.text);
	const response = rest.response(200, {
		readingBurden,
		text: data.text,
	}, '/flesch-kincaid');
	callback(null, response);
};

module.exports.saveFkReadabilityScore = (event, context, callback) => {
	console.info(`saveFkReadabilityScore: ${event.jobId}`);
	if (!parseInt(event.jobId, 10)) {
		callback(TypeError('Invalid Job ID'), {
			statusCode: 400,
			message: 'Invalid Job ID. Please retry.',
		});
	}
	const data = JSON.parse(event.body);
	const readingBurden = readability.fleschKincaid(data.text);
	const response = readabilityScore.saveJobScore(event.jobId, data.text, readingBurden);
	callback(null, response);
};
