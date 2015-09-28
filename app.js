var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/expressrest');

var User = require('./models/user');
var Product = require('./models/product');
var Order = require('./models/order');

var roho = new User({
  name: 'Rob Holloway',
  gender: 'male',
  dob: '12 feb 1977'
});

roho.save(function(err, user) {
  if (err) console.log(err);
  console.log('roho saved');
});

var cd = new Product({
  name: 'Whales playing pan-pipes',
  price: 16.99,
  description: 'This delightful new album contains the best of whales playing pan-pipes with their blow-holes'
});

cd.save(function(err, product) {
  if (err) console.log(err);
  console.log('cd saved');
});

var rohoOrder = new Order({
  price: 16.99, //CURRENTLY HARD CODED, UPDATED TO REFERENCE PRODUCTS
  createdAt: '28 sep 2015',
  address: {
    street: '123 Blah Avenue',
    postcode: 'AB1 2CE',
    town: 'Madeuptown',
    country: 'France'
  },
  products: cd,
  user: roho
});

rohoOrder.save(function(err, order) {
  if (err) console.log(err);
  console.log('order saved');
});











