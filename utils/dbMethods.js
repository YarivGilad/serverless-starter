/* eslint-disable no-param-reassign */
const rest = require('./rest');
const dynamodb = require('../dynamodb');

/**
 *
 * @param {object} data
 * @returns {object} response
 */
module.exports.createNew = (data, tableName, endpoint) => {
	if (data.createdAt === undefined || data.createdAt === null) data.createdAt = new Date();
	return new Promise((resolve, reject) => {
		const dbParams = {
			TableName: tableName,
			Item: data,
		};

		console.info('Attempt saving:\n', dbParams);

		dynamodb.put(dbParams, (err) => {
			if (err) {
				console.error(err);
				reject(err);
			}
			console.info('Saved:\n', dbParams.Item);
			const response = rest.response(200, dbParams.Item, endpoint);
			resolve(response);
		});
	});
};

