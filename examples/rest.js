// This class was created so that we could switch API keys easily based
// on the organisation we were integrating for
// const registeredCompanies = require('./company_names.json');
// const crypto = require('crypto');
const rp = require('request-promise');

class Rest {
	/** Constructs REST options with the API URL
	 * and credentials for that org
	 */
	constructor(orgID, endpoint, params, serviceURL) {
		// if (!orgID) throw new Error('No Org ID specified. Try again!');
		// const companyKey = registeredCompanies[orgID].key;
		// const companySecret = registeredCompanies[orgID].secret;
		this.orgID = orgID;
		if (serviceURL === true) {
			this.url = `${process.env.SERVICE_URL + endpoint}?${params}`;
		} else {
			this.url = `${process.env.API_URL + endpoint}?${params}`;
		}
		// this.orgKey = process.env[companyKey];
		// this.orgSecret = process.env[companySecret];
	}

	/**
	 * Request Header Options for endpoint
	 *
	 * @param {JSON} data
	 * @throws {error} .
	 * @returns {object}
	 */
	request(method, json, data) {
		const accepted = ['GET', 'POST', 'PUT'];
		if (accepted.indexOf(method) < 0) throw new Error('Your request method is not an accepted request method');
		if (json === null) json = true; // eslint-disable-line no-param-reassign

		// const epoch = Math.round((new Date().getTime() / 1000.0) + 30); // in seconds
		// const message = `${this.orgKey}|${epoch}`;
		// const secret = crypto.createHmac('sha256', this.orgSecret);
		// secret.update(message);

		// const options = {
		// 	uri: this.url,
		// 	json,
		// 	method,
		// 	headers: {
		// 		// 'Content-Type': 'application/json',
		// 		'X-JVI-API': this.orgKey,
		// 		'X-JVI-SIGN': secret.digest('base64'),
		// 		'X-JVI-EPOCH': epoch,
		// 	},
		// };
		const options = {
			uri: this.url,
			json,
			method,
			auth: {
				user: process.env.SERVICE_USER,
				pass: process.env.SERVICE_SEC,
			},
		};
		if ((data !== null) && method !== 'GET') {
			options.body = data;
		}

		console.info(`Sending request to ${this.url}`);
		return rp(options)
			.then((body) => {
				const res = (typeof (body) === 'object') ? body : JSON.parse(body);
				// console.info(res);
				if (res.status.code !== 200) console.error('request not OK');
				return res;
			})
			.catch((err) => {
				console.error(err);
				throw new Error(err);
			});
	}

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
	response(status, data, endpointName) {
		if (typeof (status) !== 'number') status = parseInt(status, 10); // eslint-disable-line no-param-reassign
		let message = `Response for ${endpointName}.\nGiven URL: ${this.url}`;
		if (this.dbInteraction === true) {
			message += '\nInfo saved to DB';
		}
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
	}
}

module.exports = Rest;
