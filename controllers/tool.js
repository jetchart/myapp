'use strict'

//Imports
var Tool = require('../models/tool');

var controller = {

  getTools: function(req, res){
		Tool.find({}).sort('-modificationDate').exec((err, tools) => {
			if(err) return res.status(500).send({message: 'Error in getTools: ' + err});
			if(!tools) return res.status(404).send({message: 'There are no tools'});
			return res.status(200).send({tools});
		});
	},
  saveTool: function(req, res){
    //New tool
		var tool = new Tool();
    //Set tool data from request
		var params = req.body;
		tool.name = params.name;
    tool.description = params.description;
    tool.creationDate = new Date().toString();
    tool.modificationDate = new Date().toString();
    //Save tool
		tool.save((err, toolStored) => {
			if(err) return res.status(500).send({message: 'Error in saveTool: ' + err});
			if(!toolStored) return res.status(404).send({message: 'Tool not saved'});
			return res.status(200).send({tool: toolStored});
		});
	},
  getTool: function(req, res){
    var idTool = req.params.id;
    if(idTool == null) return res.status(404).send({message: 'There is no tool with id: ' + idTool});
    Tool.findById(idTool, (error, tool) => {
      if(error) return res.status(500).send({message: 'Error in getTool: ' + error});
		  if(!tool) return res.status(404).send({message: 'There is no tool with id: ' + idTool});
		  return res.status(200).send({tool});
    });
  }
};

module.exports = controller;
