const express 			= require('express');
const path              = require("path");

const router 			= express.Router();

const AdminController   = require("../controllers/admin.controller");

router.get("/admins", AdminController.admin_list);

module.exports = router;