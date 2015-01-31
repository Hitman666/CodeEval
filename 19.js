var fs = require("fs");
var brojac = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line != "") {
        var arr = line.split(',');

        var prvi = arr[1];
        var drugi = arr[2];
        
        var brojBin = (arr[0] >>> 0).toString(2);
        
        brojBin = brojBin.split("").reverse().join("");
        
        if (brojBin[prvi-1] === brojBin[drugi-1])
            console.log(true);
        else
            console.log(false);
    }
});