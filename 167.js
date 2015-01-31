var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        if (line.length > 55){
            line = line.substring(0, 40).trim();
            line += "... <Read More>";
        }
        console.log(line);
    }
});