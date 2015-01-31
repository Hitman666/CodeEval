var replacements = [', yeah!', ', this is crazy, I tell ya.', ', can U believe this?', ', eh?', ', aw yea.', ', yo.', '? No way!', '. Awesome!'];
var replIndex = -1;

var punctCnt = 0;
var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
	if (line == '') return;

	var sentArr = line.split(/([!\.\?])/);

	var myArr = [];
	var myBrojac = 0;
	for (var k = 0; k < sentArr.length; k += 2) {
		if (sentArr[k] == '\n' || sentArr[k] == '\r' || sentArr[k] == '')
			break;

		myArr[myBrojac++] = sentArr[k] + sentArr[k + 1];
	}

	var myline = "";
	for (var i = 0; i < myArr.length; i++) {
		var s = myArr[i];

		if (s == "\n" || s == "\r")
			continue;

		punctCnt++;
		if (punctCnt % 2 == 0) {
			replIndex++;
			if (replIndex > replacements.length - 1)
				replIndex = 0;

			s = s.substring(0, s.length - 1);
			myline = myline + s + replacements[replIndex];
		} else {
			myline += s;
		}
	}

	console.log(myline);

});