var router = require("express").Router();
 var resourcesController= require('../../controllers/resourcesController');
 var usersController = require('../../controllers/usersController');
var mongoose=require("mongoose");
var Users = require("../../models/Users")


//1. make sure email is sent
//2..


router.route("/") 
.put(usersController.update).post(usersController.findByEmail)


module.exports = router;
