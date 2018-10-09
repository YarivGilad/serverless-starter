/* eslint-disable no-useless-escape */
const syllable = require('syllable');

/**
 *
 * @param  {string} text raw text
 * @returns  {string} cleaned text
 */
module.exports.cleanText = (text) => {
	let cleanedText = text
		.replace(/<[^>]+>/g, '')
		.replace(/[\[\],:;()\/&+#*]|\-\-/g, ' ')
		.replace(/[\.!?]/g, '.')
		.replace(/^\s+/, '')
		.replace(/\'/, ' ')
		.replace(/[\.]?(\w+)[\.]?(\w+)@(\w+)[\.](\w+)[\.]?/g, '$1$2@$3$4')
		.replace(/[ ]*(\n|\r\n|\r)[ ]*/g, '.')
		.replace(/([\.])[\.]+/g, '.')
		.replace(/[ ]*([\.])/g, '. ')
		.replace(/\s+/g, ' ')
		.replace(/\s+$/, '');

	if (cleanedText.slice(-1) !== '.') {
		cleanedText += '.';
	}
	return cleanedText;
};

/**
 *
 * @param  {string} text
 * @returns  {int} word count
 */
module.exports.countWords = string => (string ? string.split(' ').length : 0);

/**
 *
 * @param  {string} text
 * @returns  {int} sentence count
 */
module.exports.countSentences = string => (string ? string.split(/[.!?]+\s/).filter(Boolean).length : 0);

/**
 *
 * @param  {string} text
 * @returns  {int} syllable count
 */
module.exports.countsyllables = string => (string ? syllable(string) : 0);
