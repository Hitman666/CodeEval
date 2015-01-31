var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line == '') return 0;

    var arr = line.split(';');
    var expectedSum = arr[1];
    var numbers = arr[0].split(',');
    
    var outputArr = [];
    for(var i=0; i<numbers.length; i++){
    	for(var j=i+1; j<numbers.length; j++){
    		if (parseInt(numbers[i]) + parseInt(numbers[j]) == expectedSum)
    			outputArr.push(numbers[i] + ',' + numbers[j]);
    	}
    }
    
    if (outputArr.length)
    	console.log(outputArr.join(';'));
    else
    	console.log('NULL');
});