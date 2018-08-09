'use strict'

// Imports
var express = require('express');
var controller = require('../controllers/tool.js');

//Define routes
var router = express.Router();
router.get('/tools', controller.getTools);
router.post('/tool/save', controller.saveTool);
router.get('/tool/:id', controller.getTool);

//Export routes
module.exports = router;
