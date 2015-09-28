// requires
var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var bodyParser = require('body-parser');

var User = require('./models/user');
var userRoutes  = express.Router();

app.use(bodyParser.json());


// INDEX
userRoutes.get('../models/users', function(req, res) {
  console.log('HELP!');
  // res.json(User.all);
})

// SHOW
videoRouter.get('/:id', function(req, res) {
  console.log(req.body);
  console.log(req.params);
  res.render('show', { header: 'Show!'});
})

// NEW
videoRouter.get('/new', function(req, res) {

})

// CREATE
videoRouter.post('/', function(req, res) {
  console.log(req.body.title);
})

// EDIT
videoRouter.get('/:id/edit', function(req, res) {

})

// UPDATE
videoRouter.put('/:id', function(req, res) {

})

//DELETE
videoRouter.delete('/:id', function(req, res) {

})


// some more middleware
app.use('/userful-info', router)
app.use('/videos', videoRouter);

//actiony things or whatever
app.listen(port);
console.log('server started on ' + port);