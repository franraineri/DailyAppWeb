var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Developers = require('../models/Developers.js');

/* GET ALL PRODUCTS */
router.get('/', function(req, res, next) {
  Developers.find(function (err, dev) {
    if (err) return next(err);
    res.json(dev);
  });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
  Developers.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    console.log(post)
    res.json(post);
  });
});

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
  Developers.create(req.body, function (err, post) {
  console.log(req.body);
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
  Developers.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
  Developers.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
