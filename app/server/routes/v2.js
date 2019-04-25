const express 			= require('express');


const router 			= express.Router();

const AdminController   = require("../controllers/admins.controller");
const UserController   = require("../controllers/users.controller");
const IngredientsController   = require("../controllers/ingredients.controller");
const Recipe = require("../controllers/recipe.controller");

router.get("/admin/List", AdminController.adminList);
router.post("/admin/create", AdminController.adminCreate);
router.post("/user/create", UserController.createUser);
router.post("/login", UserController.login);
router.get("/ingredient/List", IngredientsController.ingredientsList);
router.get("/ingredient/search", IngredientsController.ingredientsSearch);
router.post("/ingredient/add", IngredientsController.ingredientsAdd);
router.get("/recipe/search", Recipe.searchRecipe);
router.post("/recipe/create", Recipe.createRecipe);
router.post("/add", UserController.addIngredient);


module.exports = router;