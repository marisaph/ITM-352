var fs = require("fs");

var myParser = requre ('body-parser'); 

var filename = "user_data.json";
var data = fs.readFileSync(filename, 'utf-8');

// Only open the file if it exists 
if (fs.existsSync(filename)) {
var data = JSON.parse(raw_data);
console.log (users_reg_data);

fstats= fs.statSync(filename); 
console.log(filename + "has" + fstats.size + "characters");
}
else {
    console.log ('File' + '' + filename + '' + 'does not exist!')
}