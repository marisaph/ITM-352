var fs = require("fs");

var myParser = requre ('body-parser'); 

var filename = "user_data.json";
var data = fs.readFileSync(filename, 'utf-8');
var data = JSON.parse(raw_data);
console.log (users_reg_data);