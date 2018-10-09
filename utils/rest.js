// Extension example in ../examples/rest.js

/**
 * Response wrapper as I'm lazy and if we change something,
 * I can change it across the board at once instead of going through all endpoints
 *
 * @param {int} status
 * @param {object} data
 * @param {string} endpointName
 * @throws {error} .
 * @returns {object} response
 */
module.exports.response = (status, data, endpointName) => {
	if (typeof (status) !== 'number') status = parseInt(status, 10); // eslint-disable-line no-param-reassign
	const message = `Response for ${endpointName}.`;
	const res = {
		statusCode: status,
		headers: {
			'Access-Control-Allow-Origin': '*', // Required for CORS support to work
			'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
		},
		body: JSON.stringify({
			message,
			data,
		}),
		isBase64Encoded: false,
	};
	return res;
};
