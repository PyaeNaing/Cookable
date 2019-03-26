const express 			= require('express');
const path              = require("path");

const router 			= express.Router();

const AdminController   = require("../controllers/admin.controller");
const userController   = require("../controllers/user.controller");

router.get("/admins", AdminController.admin_list);

router.post("/createUser", userController.createUser);


module.exports = router;