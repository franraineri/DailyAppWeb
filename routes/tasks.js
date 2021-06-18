var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Task = require('../models/Developers.js');

/* GET ALL TaskS */
router.get('/', function(req, res, next) {
  Task.find(function (err, dev) {
    if (err) return next(err);
    res.json(dev);
  });
});

/* GET SINGLE Task BY ID */
router.get('/:id', function(req, res, next) {
  Task.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    console.log(post)
    res.json(post);
  });
});


/* GET SINGLE Task BY NAME */
router.get('/name/:name', function(req, res, next) {
  Task.findOne({name:req.params.name }, function (err, post) {
    if (err) return next(err);
    console.log(post)
    res.json(post);
  }).exec(); 
});



/* SAVE Task */
router.post('/', function(req, res, next) {
  Task.create(req.body, function (err, post) {
  console.log(req.body);
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Task */
router.put('/:id', function(req, res, next) {
  Task.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Task BY ID*/
router.delete('/:id', function(req, res, next) {
  Task.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE ALL Task */
router.delete('/', function(req, res, next) {
  Task.remove(function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
