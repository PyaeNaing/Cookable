const express 			= require('express');
const path              = require("path");

const router 			= express.Router();

const AdminController   = require("../controllers/admin.controller");
const UserController   = require("../controllers/user.controller");
const IngredientsController   = require("../controllers/ingredients.controller");

router.get("/admins", AdminController.adminList);
router.post("/createAdmin", AdminController.adminCreate);

router.post("/createUser", UserController.userCreate);

router.get("/allIngredients", IngredientsController.ingredientsList);
router.get("/searchIngredients", IngredientsController.ingredientsSearch);

module.exports = router;