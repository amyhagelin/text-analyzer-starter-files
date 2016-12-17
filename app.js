

var text = //input from the form - how to do that?
var textArray = text.split(/[ ,!.";:-?]+/);


// total word count -
function totalWordCount(textArray) {
return textArray.length;
}

// unique word count
function uniqueWordCount(textArray) {
	var uniqueWords = {}
	for (var i = 0; i < textArray.length; i++) {
		var key = textArray[i];
		if (uniqueWords[key] < 1) {
			uniqueWords[key] = 1;
		}
	}
	return = Object.keys(uniqueWords).length; // should I count with a loop instead?
}

// average word length
function avgWordLength(textArray) {
	var counter = 0;
	var sumWordLengths = 0;
	for (var i = 0; i < textArray.length; i++) {
		sumWordLengths = sumWordLengths + textArray[i].length;
		counter = counter + 1;
	}
	return sumWordLengths / counter;
}

// average sentence length - split at .?!
function avgSentenceLength(text) {
	var sentenceArray = text.split(/[!.?]+/);
	var counter = 0;
	var sumSentenceLengths = 0;
	for (var i = 0; i < sentenceArray.length; i++) {
		sumSentenceLengths = sumSentenceLengths + sentenceArray[i].length;
		counter = counter + 1;
	}
	return sumSentenceLengths / counter;
}

