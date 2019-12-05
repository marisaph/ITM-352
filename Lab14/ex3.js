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
            else 
                console.log ("Try again!")
            }
    }
 });

 app.listen(8080, () => console.log(`listening on port 8080`));