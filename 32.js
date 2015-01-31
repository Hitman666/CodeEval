var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != '') {
        var arr = line.split(',');
        var haystack = arr[0].trim();
        var needle = arr[1].trim();

        if(haystack.indexOf(needle) != -1)
        	console.log(1);
        else
        	console.log(0);
    }
});