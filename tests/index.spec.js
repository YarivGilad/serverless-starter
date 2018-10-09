/* eslint-disable no-var */
require('dotenv').config();
const hello = require('../index').hello; // eslint-disable-line prefer-destructuring
const epoch = require('../index').getEpoch; // eslint-disable-line prefer-destructuring
const fkReadability = require('../index').fkReadability; // eslint-disable-line prefer-destructuring

describe('hello', () => {
	const event = {};
	const context = {};
	let resp = {};

	it('should call hello function with success', (done) => {
		const callback = (ctx, data) => {
			console.info(data);
			resp = data;
			done();
		};
		hello(event, context, callback);
		expect(resp.statusCode).toBe(200);
	});
});

describe('epoch', () => {
	const event = {};
	const context = {};
	let resp = {};

	it('should call epoch function with success', (done) => {
		const callback = (ctx, data) => {
			console.info(data);
			resp = data;
			done();
		};
		epoch(event, context, callback);
		expect(resp.statusCode).toBe(200);
		expect(JSON.parse(resp.body).data).not.toBeNull();
	});
});

describe('fkReadability', () => {
	const event = {
		body: 'Test sentence 1234.',
	};
	const context = {};
	let resp = {};

	it('should call fkReadability function with success', (done) => {
		const callback = (ctx, data) => {
			console.info(data);
			resp = data;
			done();
		};
		epoch(event, context, callback);
		expect(resp.statusCode).toBe(200);
		expect(JSON.parse(resp.body).data).not.toBeNull();
	});
});
