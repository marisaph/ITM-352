var fs = require("fs");
var express = require('express');
var app = express();
var myParser = requre ('body-parser'); 
app.use(myParser.urlencoded({ extended: true }));
var filename = "user_data.json";
var data = fs.readFileSync(filename, 'utf-8');

// Only open the file if it exists 
if(fs.existsSync(filename)) {
    var data = JSON.parse(raw_data);
    console.log (users_reg_data);

    fstats= fs.statSync(filename); 
    console.log(filename + "has" + fstats.size + "characters");
}
else {
    console.log ('File' + '' + filename + '' + 'does not exist!');
}

app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" name="submit">
</form>
</body>
    `;
    response.send(str);
 });
 app.post("/login", function (request, response) {
    let POST = request.body;
    console.log(POST);

    if (typeof POST ['submit'] == undefined)
    {
        // check if the submit button was pressed 
        console.log('No form data');
    } else
    {
        // user submitted a userid and password. test them for validity 
        if(users_reg_data[POST.username] != undefined)
        {
            if (POST.password == users_reg_data [POST.username].password); /*for password*/
            {
                console.log ("Got a good password");
            }
            else {
                console.log ("Try again!");
    }
 });

 app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
<input type="email" name="email" size="40" placeholder="enter email"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

 app.post("/register", function (request, response) {
    // process a simple register form
    console.log ("Got the registration request");
    let POST = request.body;

    username = POST.username; //getting username from user//
if (users_reg_data[username] == 'undefined') // check to see if there is a username that already exists// 
{
    users_reg_data[username] = {}; //creating a new attribute and assign empty objcect// 
    users_reg_data[username].name = username; 
    users_reg_data[username].password = POST.password; //getting password from user//
    if (POST.password != POST.repeat_password)
    {
        console.log ("Passwords do not match!");
    }
    users_reg_data[username].email = POST.email; //getting email from user//

    var output_data = JASON.stringify(users_reg_data); 
    fs.writeFileSync(filename, output_data, "utf-8");

    response.send("User" + username + "is registered!"); //user becaomes registered in system//
} else 
{
    response.send("User" + username + "already taken; try again.");
}

 });

 app.listen(8080, () => console.log(`listening on port 8080`));