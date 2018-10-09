const readability = require('../readability/parsing');

test('Clean text should clean a given string', () => {
	const input = 'I am awesome at analysis and agreeing with things';
	const expectedResponse = 'I am awesome at analysis and agreeing with things.';
	expect(readability.cleanText(input)).toEqual(expectedResponse);
});

test('Clean text should clean a weird string', () => {
	const input = '... !! I am awesome// at analysis /// and agreeing!. <br> with things';
	const expectedResponse = '. . I am awesome at analysis and agreeing. with things.';
	expect(readability.cleanText(input)).toEqual(expectedResponse);
});

test('CountWords should return the correct word count', () => {
	const input = 'I am awesome at analysis and agreeing with things';
	expect(readability.countWords(input)).toEqual(13);
});

test('CountWords should return the correct word count even if given null', () => {
	const input = null;
	expect(readability.countWords(input)).toEqual(0);
});

test('CountWords should return the correct word count', () => {
	const input = 'I am awesome at analysis and agreeing with things. PLUS I\'m good at counting sentences.';
	expect(readability.countSentences(input)).toEqual(2);
});

test('CountWords doesn\'t fuck up if given a null value', () => {
	const input = null;
	expect(readability.countSentences(input)).toEqual(0);
});

test('countsyllables can count syllables', () => {
	const input = 'I am awesome at analysis and agreeing with things';
	expect(readability.countsyllables(input)).toEqual(21);
});

test('countsyllables doesn\'t fuck up if given a null value', () => {
	const input = null;
	expect(readability.countsyllables(input)).toEqual(0);
});
