// git push --set-upstream origin anhnguyendon92




// Importing libraries
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const request = require('request');

const PORT = process.env.PORT || 8080;


// API key pk_f37fe7e4cbe74f4a85a02621ccabbc00
// create call_api function
function call_api(finishedAPI) {


    request('https://cloud.iexapis.com/stable/stock/fb/quote?token=pk_f37fe7e4cbe74f4a85a02621ccabbc00', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
        if (res.statusCode === 200) {
            finishedAPI(body);
        }
    });
}
// Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set handlebar routes
app.get('/', function (req, res) {
    call_api(function (doneAPI) {
        res.render('home', {
            stock: doneAPI
        });
    });


    // create market page route
    app.get('/market.html', function (req, res) {
        res.render('market');
    })
/// Adding in html
    // Set static folder
    app.use(express.static(path.join(__dirname, 'public')));


    app.listen(PORT, () => console.log('Server listening on: http://localhost:', + PORT))
});