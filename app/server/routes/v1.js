const express 			= require('express');
const path              = require("path");
var session             = require('express-session');

const router 			= express.Router();

const AdminController   = require("../controllers/admins.controller");
const UserController   = require("../controllers/users.controller");
const IngredientsController   = require("../controllers/ingredients.controller");

router.get("/admins", AdminController.adminList);
router.post("/createAdmin", AdminController.adminCreate);
router.post("/createUser", UserController.createUser);
router.post("/login", UserController.login);
router.get("/allIngredients", IngredientsController.ingredientsList);
router.get("/searchIngredients", IngredientsController.ingredientsSearch);
router.post("/createIngredient", IngredientsController.ingredientsAdd);


module.exports = router;