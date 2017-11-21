var express = require('express');
var bodyParser = require('body-parser');

var app = express();

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Peanuts_app started on port:' + port)
})
