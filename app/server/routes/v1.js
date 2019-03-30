const express 			= require('express');
const path              = require("path");
const passport          = require('passport');
var session             = require('express-session');



const router 			= express.Router();

const AdminController   = require("../controllers/admin.controller");
const UserController   = require("../controllers/user.controller");

router.get("/admins", AdminController.adminList);
router.post("/createAdmin", AdminController.adminCreate);
router.post("/createUser", UserController.userCreate);
router.post("/login", UserController.login);


module.exports = router;