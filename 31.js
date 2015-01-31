var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line != "") {
        var arr = line.split(',');
        var s = arr[0];
        var c = arr[1];

        console.log(s.lastIndexOf(c));
    }
});