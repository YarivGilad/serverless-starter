const parsing = require('./parsing.js');

/**
 *
 * @param  {string} text
 * @returns  {int} fleschKincaidScore
 */
module.exports.fleschKincaid = (text) => {
	const cleanedText = parsing.cleanText(text);
	const wordCount = parsing.countWords(cleanedText);
	const sentenceCount = parsing.countSentences(cleanedText);
	const syllableCount = parsing.countsyllables(cleanedText);
	return 206.835 - (1.015 * (wordCount / sentenceCount)) - (84.6 * (syllableCount / wordCount));
};
