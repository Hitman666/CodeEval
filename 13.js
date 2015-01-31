var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var arr = line.split(', ');
        var words = arr[0];
        var removeCharArr = arr[1].split('');

        for(var i = 0; i<removeCharArr.length; i++){
        	var re = new RegExp(removeCharArr[i],"gi");
        	words = words.replace(re, '')
        }
        console.log(words);
    }
});