
// total word count
function totalWordCount(text) {
	var textArray = text.split(/[ ,!.";:-?]+/).filter(Boolean);
	return textArray.length;
}

// unique word count
function wf(textArray) {
  var uniqueWords = {}
  for (var i = 0; i < textArray.length; i++) {
		var key = textArray[i];
		if (uniqueWords[key] >= 1) {
			uniqueWords[key]++;
		} else {
          uniqueWords[key] = 1;
        }
	}
  return uniqueWords;
}

function uniqueWordCount(text) {
	var textArray = text.split(/[ ,!.";:-?]+/).filter(Boolean); 
	return Object.keys(wf(textArray)).length; // should I count with a loop instead?
}

// average word length
function avgWordLength(text) {
  var textArray = text.split(/[ ,!.";:-?]+/).filter(Boolean); 
	var sumWordLengths = 0;
  textArray.forEach(function (word) {
    sumWordLengths += word.length;
  });
	return (sumWordLengths / textArray.length).toFixed(2);
}

// average sentence length - split at .?!
function avgSentenceLength(text) {
  var sentenceArray = text.split(/[!.?]+/).filter(Boolean);
  var numOfSentences = sentenceArray.length;
  var sum = 0;
  sentenceArray.forEach(function (sentence) {
    sum += totalWordCount(sentence);
  });
  
  return (sum / numOfSentences).toFixed(2);
}

// jQuery
$("button.analyze").click(function () {
	var text = $("#user-text").val();
	// now you have the text you
	var wc = totalWordCount(text);
	var uwc = uniqueWordCount(text);
	var awl = avgWordLength(text);
	var asl = avgSentenceLength(text);
	// do the rest here



	// return results
	// injecting the results in the DOM
	$("dl.hidden").removeClass("hidden");
	$("#wc").html(wc);
	$("#uwc").html(uwc);
	$("#awl").html(awl);
	$("#asl").html(asl);
})

