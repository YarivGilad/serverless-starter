/* eslint-disable no-useless-escape */
const syllable = require('syllable');

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

module.exports.countWords = string => (string ? string.split(' ').length : 0);

module.exports.countSentences = string => (string ? string.split(/[.!?]+\s/).filter(Boolean).length : 0);

module.exports.countsyllables = string => (string ? syllable(string) : 0);
