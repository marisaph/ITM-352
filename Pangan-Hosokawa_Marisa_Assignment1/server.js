var express = require('express');
var app = express();
var myParser = require("body-parser");
var fs = require('fs');
var data = require('./public/store.js');
var products = data.products_array;

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

app.use(express.static('./public'));
app.listen(8080, () => console.log(`listening on port 8080`));