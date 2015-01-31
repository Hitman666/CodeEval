var fs = require("fs");
var brojac = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line != "") {
        var arr = line.split(',');
        var numbers = {};
        var ukBroj = arr.length;

        for (var i = 0; i < ukBroj; i++) {
            var mynum = parseInt(arr[i]);

            if (numbers[mynum] == null)
                numbers[mynum] = 1;
            else
                numbers[mynum] ++;
        }

        var success = false;
        Object.keys(numbers).forEach(function(key) {
            //console.log(key + " " + numbers[key]);
            if (parseInt(numbers[key]) > parseInt(ukBroj / 2)) {
                console.log(key);
                success = true;
            }
        });

        if (!success){
            console.log('None');
        }
    }
});