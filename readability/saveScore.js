const db = require('../utils/dbMethods');

/**
 *
 * @param  {int} jobId
 * @param  {string} text
 * @param  {int} score
 */
module.exports.saveJobScore = (jobId, text, score) => {
	const createDate = new Date();
	const data = {
		job_id: jobId,
		score,
		text,
		createdAt: createDate,
	};
	return db.createNew(data, 'job-scores', 'saveJobScore');
};

