var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Developer = require('../models/Developers.js');

/* GET ALL DEVELOPERS */
router.get('/', function(req, res, next) {
  Developer.find(function (err, dev) {
    if (err) return next(err);
    res.json(dev);
  });
});

/* GET SINGLE DEVELOPER BY ID */
router.get('/:id', function(req, res, next) {
  Developer.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    console.log(post)
    res.json(post);
  });
});


/* GET SINGLE DEVELOPER BY NAME */
router.get('/name/:name',  function(req, res, next) {
  Developer.findOne({name:req.params.name }, function (err, post) {
    if (err) return next(err);
    console.log(post)
    res.json(post);
  }).exec(); 
});



/* SAVE DEVELOPER */
router.post('/', function(req, res, next) {
  Developer.create(req.body, function (err, post) {
  console.log(req.body);
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE DEVELOPER */
router.put('/:id', function(req, res, next) {
  Developer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE DEVELOPER BY ID*/
router.delete('/:id', function(req, res, next) {
  Developer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE ALL DEVELOPER */
router.delete('/', function(req, res, next) {
  Developer.remove(function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
