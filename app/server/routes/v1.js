const express 			= require('express');
const path              = require("path");

const router 			= express.Router();

const AdminController   = require("../controllers/admin.controller");

router.get("/admins", AdminController.adminList);
router.post("/createAdmin", AdminController.adminCreate);

module.exports = router;