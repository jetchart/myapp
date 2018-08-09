'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToolSchema = new Schema({
  name: String,
  description: String,
  creationDate: String,
  modificationDate: String
});

module.exports = mongoose.model('Tool', ToolSchema);
