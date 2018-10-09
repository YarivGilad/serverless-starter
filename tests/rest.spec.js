const rest = require('../utils/rest');

describe('rest', () => {
	it('should call return a response object with success', (done) => {
		const res = rest.response(200, 'test', 'test');
		console.info(res.statusCode);
		const body = JSON.parse(res.body);
		expect(res.headers).not.toBeNull();
		expect(res.isBase64Encoded).toBeFalsy();
		expect(res.statusCode).toBe(200); // response() should handle non-ints
		expect(body.data).toEqual('test');
		expect(body.message).toEqual('Response for test.\n');
		done();
	});

	it('should handle status codes put in as a string', (done) => {
		const res = rest.response('200');
		const stringHandled = (typeof (res.statusCode) === 'number');
		console.info(`Handles strings? ${stringHandled}`);
		expect(res.statusCode).toBe(200); // response() should handle non-ints
		done();
	});
});
