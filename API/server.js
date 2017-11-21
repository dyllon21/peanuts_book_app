var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var app = express();
var format = require('util').format;
const Models = require('./models');

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Methods', 'Content-Type');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
})

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(express.static('./public'));

const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/FundiswaLibrary"
mongoose.connect(mongoURL, {
  useMongoClient: true
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Peanuts_app started on port:' + port)
})

var addBook = require('./lib/add_books.js');

const BookSchema = mongoose.Schema({

  bookName: String,
  author: String,
  genre: String,
  dateWritten: Number,
  dateAdded: {
    type: Date,
    default: Date.now
  },
  recommendations: Number,
  timesTaken: Number,
  availability: Boolean,
  currentUser: {
    type: String,
    default: "None"},
  about: String
});

const Books = mongoose.model('Books', BookSchema);

const bookDB = Books;


app.post('/api/addBook', function(req,res){
  var newBook = req.body;
  console.log(newBook);
  var newStockBook = new bookDB();
  addBook(newStockBook,newBook,res);
  var code = res.statusCode;
  res.json({
    code,
    msg: 'Data saved!'
  })
})
