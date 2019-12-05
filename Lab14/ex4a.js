var fs = require("fs");

var myParser = requre ('body-parser'); 

var filename = "user_data.json";
var data = fs.readFileSync(filename, 'utf-8');
var data = JSON.parse(raw_data);

username = 'newuser';
if (users_reg_data['username'] = undefined) // check to see if there is a username that already exists// 
{
    users_reg_data[username] = {}; //creating a new attribute and assign empty objcect// 
    users_reg_data[username].name = username; 
    users_reg_data[username].password = 'newpass';
    users_reg_data[username].email = 'newuser@user.com';
}

var output_data = JASON.stringify(users_reg_data);
fs.writeFileSync(filename, output_data, "utf-8");

console.log (users_reg_data);