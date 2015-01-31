function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line == '') return 0;

    var outputArr = [];
    line.split(' ').forEach(function(word){
    	outputArr.push(capitaliseFirstLetter(word));
    });

    console.log(outputArr.join(' '));
});