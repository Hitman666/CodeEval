var fs  = require("fs");

function isUpperCase(character){
	if (character == character.toUpperCase())
		return true;
	else
		return false;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line == '') return;

    var uppercase = 0;
    var lowercase = 0;

    var arr = line.split('');
    var arrLength = arr.length;

    for(var i=0; i<arrLength; i++){
    	//console.log(arr[i]);
    	if (arr[i] == '\n'){
    		//console.log("ima");
    		arrLength--;
    		break;
    	}

		if (isUpperCase(arr[i])){
			uppercase++;
		}
		else{
			lowercase++;
		}
    }

    var upper = (uppercase * 1. / arrLength) * 100;
    var lower = (lowercase * 1. / arrLength) * 100;

    //console.log(arrLength + "lowercase: " + lower.toFixed(2) + " uppercase: " + upper.toFixed(2));
    console.log("lowercase: " + lower.toFixed(2) + " uppercase: " + upper.toFixed(2));
});