'use strict';


var mongoose = require('mongoose'),
  Stub = mongoose.model('stubSchema');

exports.list = function(req, res) {
  Stub.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create = function(req, res) {
  var new_stub = new Stub(req.body);
  new_stub.save(function(err, stub) {
    if (err)
      res.send(err);
    res.json(stub);
  });
};


exports.read = function(req, res) {
  Stub.findById(req.params.id, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update = function(req, res) {
  Stub.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.remove = function(req, res) {


  Stub.remove({
    _id: req.params.id
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Stub successfully deleted' });
  });
};