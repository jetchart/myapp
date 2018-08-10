'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  description: String,
  creationDate: String,
  modificationDate: String,
  //tool: {type: Schema.ObjectId, ref: 'tool' }
  //tool: {type: Schema.ObjectId, ref: 'tool' }
  tool: { type: Schema.Types.ObjectId, ref: 'Tool' },
  //tools: {type: Schema.ObjectId, ref: 'tool' }
});

module.exports = mongoose.model('Project', ProjectSchema);
