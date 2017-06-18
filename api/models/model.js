'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var stubSchema = new Schema({
  name: {
    type: String,
    Required: 'Name is required'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['published', 'draft', 'archived']
    }],
    default: ['draft']
  }
});

module.exports = mongoose.model('stubSchema', stubSchema);