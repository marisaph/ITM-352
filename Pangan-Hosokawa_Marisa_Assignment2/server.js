//Marisa Pangan-Hosokawa -- This program is made to be able to purchase a product, entering a quantity that is a positive integer,
// and going to the invoice when wanting to make the purchase. There is also a login page where you can enter a log in or
// create an account. If it is already made, the code would make it so that the user would have to try again. 

//checking for positive integers 
var express = require('express');
var app = express();
var myParser = require("body-parser");
var fs = require('fs');
var data = require('./public/store.js');
var products = data.products_array;
var app = express();
app.use(parser.urlencoded({ extended:true}));

function isNonNegInt(q, returnErrors = false) {
    errors = []; // assume no errors at first
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    return returnErrors ? errors : (errors.length == 0);
}

function process_quantity_form(POST, response) {
    let model = products[i]['model'];
    let model_price = products[i]['price'];
    if (typeof POST['quantity_textbox'] != 'undefined') {
        q = POST['quantity_textbox'];
        if (isNonNegInt(q)) {
            var contents = fs.readFileSync('./views/display_quantity_template.view', 'utf8');
            response.send(eval('`' + contents + '`')); // render template string
        }
        else {
            response.send(`${q} is not a quantity! Press the back button and try again.`);
        }
    }
}

app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);
    next();
});

app.use(myParser.urlencoded({ extended: true }));
app.post("/process_form", function (request, response) {
    let POST = request.body;
    process_quantity_form(POST, response);
});

app.post ("/login", request,response); {
    
}

//for login and registration 
var filename = 'user_data.json'

if (fs.existsSync(filename)) { //check to see if file exists
    stats = fs.statSync(filename);
    console.log(filename + ' has ' + stats.size + ' characters');
    data = fs.readFileSync(filename, 'utf-8')
    users_reg_data = JSON.parse(data);
  } else {
    console.log(filename + ' does not exist!');
  }
  // modified from lab 14
  
  app.post("/login.html", function (req, res) {
    
    var LogError = [];
  
    console.log(req.body);
  
    //make the username case insensitive 
    the_username = req.body.username.toLowerCase(); 
  
    //check to see if the username and password exist, referenced from lab 14
    if (typeof users_reg_data[the_username] != 'undefined') { //if the username is not undefined (it exists)
  
      if (users_reg_data[the_username].password == req.body.password) { //check if the password matches the username 
  
      req.query.username = the_username;
        console.log(users_reg_data[req.query.username].name);
        req.query.name = users_reg_data[req.query.username].name
        res.redirect('/invoice.html?' + querystring.stringify(req.query)); // if it is all good send them to the invoice 
        return;
  
      } else{ //if the password is wrong but the username exists
        LogError.push = ('Invalid Password');
        console.log(LogError);
        req.query.username= the_username;
        req.query.LogError=LogError.join(';');  //sends the error to the user 
      }
    }
    else {
      LogError.push = ('Invalid Username');
      console.log(LogError);
      req.query.username= the_username;
      
      req.query.LogError=LogError.join(';'); //sends the error to the user
    }
    res.redirect('/login.html?' + querystring.stringify(req.query)); //redirects the user to the login 
  
  }
  );
  // processing the registration data
  //referenced from lab 14
  app.post("/register.html", function (req, res) { 
    qstr = req.body
    console.log(qstr);
  
    
    var errors = []; //assume no errors at first,
  
    //name contains only letters 
    if (/^[A-Za-z]+$/.test(req.body.name)) {
    }
    else {
      errors.push('Only use letters for name!')
    }
    
    // length of name is between 0 and 20 
    if ((req.body.name.length > 20 && req.body.name.length <0)) {
      errors.push('Name Too Long')
    }
    
    //checks to see if username already exists
  
    var reguser = req.body.username.toLowerCase(); 
    if (typeof users_reg_data[reguser] != 'undefined') { 
      errors.push('Username taken')
    }
    //validating username 
    //Check letters and numbers only
    
    if (/^[0-9a-zA-Z]+$/.test(req.body.username)) {
    }
    else {
      errors.push('Please only use letters and numbers for username')
    }
    if ((req.body.username.length < 5 && req.body.username.length > 20)) {
      errors.push('username must be between 5 and 20 characters')
    }
  //validating password 
    //password is min 6 characters long 
    if ((req.body.password.length < 5)) {
      errors.push('Password must be longer than 5 characters')
    }
    // check to see if passwords match
    if (req.body.password !== req.body.passConfirm) { 
      errors.push('Passwords do not match!')
    }

    // if there are no errors, save the json data and send user to the invoice
    if (errors.length == 0) {
      console.log('none!');
      req.query.username = reguser;
      req.query.name = req.body.name;
      res.redirect('./invoice.html?' + querystring.stringify(req.query))
    }
    if (errors.length > 0) {
      console.log(errors)
      req.query.name = req.body.name;
      req.query.username = req.body.username;
      req.query.password = req.body.password;
      req.query.confirmpsw = req.body.confirmpsw;
      req.query.email = req.body.email;
  
      req.query.errors = errors.join(';');
      res.redirect('./register.html?' + querystring.stringify(req.query)) //trying to add query from registration page and invoice back to register page on reload
    }
  
    //add errors to querystring
  
  }
  );
  
  //purchase function for the items 
  //referenced from assignment 1 examples 
  app.get('/purchase', function (req, res, next) { 
    
  
    
    let GET = req.query; 
    console.log(GET); 
    var hasValidQuantities = true; 
  
    var numpurchases = false; 
    //get the quantities from the text box
    for (i = 0; i < product_list.length; i++) { 
      q = GET['quantity_textbox' + i]; 
      if (isNonNegInt(q) == false) { 
        hasValidQuantities = false; 
      }
      if (q > 0) { 
        numpurchases = true; 
      }
      console.log(hasValidQuantities, numpurchases); 
    }
  
   //purchase quantities are valid so direct to the login page 
    qString = querystring.stringify(GET); 
    if (hasValidQuantities == true && numpurchases == true) { 
          res.redirect('./login.html?' + querystring.stringify(req.query)); 
    } 
      //redirect back to the order form 
      else {   
        req.query["hasValidQuantities"] = hasValidQuantities; 
        req.query["hasPurchases"] = numpurchases; 
        console.log(req.query); 
        res.redirect('./form.html?' + querystring.stringify(req.query));
      }
  
  
  });


//creating a server
app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));