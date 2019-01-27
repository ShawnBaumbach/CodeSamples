var express = require('express');
var router = express.Router();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient

// Database
var db;

MongoClient.connect('mongodb://shawn:Pizza1992@ds259144.mlab.com:59144/mongotest', { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err);
  db = client.db('mongotest'); // Database Name
  //client.close();
})

// Load Webpage
router.get('/', function(req, res, next) {
  // res.sendFile('views\\test.html', { root: '.'  });
  db.collection('quotes').find().toArray((err, results) => {
    if (err) return console.log(err);
    console.log(results);
    // html file (forms) being passed results with the name quotes
    res.render('forms.ejs', {quotes: results});
  })
});

// app.post('/form', (req, res) => {
//   db.collection('quotes').save(req.body, (err, result) => {
//     if (err) return console.log(err);
//     console.log('saved to database');
//   })
//     res.redirect('/users');
// })

router.post('/form', (req, res, next) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
  })
    res.redirect('/users');
})

// TODO: close not working?
process.on('SIGINT', function() {
  MongoClient.connection.close(function () {
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
  });
});

module.exports = router;
