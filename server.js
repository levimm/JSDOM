var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.resolve(__dirname, '/public');

app.use(function (req, res, next) {
    console.log("Request: " + req.url);
    next();
});
//app.use('/', express.static(staticPath));
app.use(express.static('public'));

app.listen(3000, function() {
    console.log('listening');
});

