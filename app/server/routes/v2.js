const express 			= require('express');


const router 			= express.Router();

const AdminController   = require("../controllers/admins.controller");
const UserController   = require("../controllers/users.controller");
const IngredientsController   = require("../controllers/ingredients.controller");
const Recipe = require("../controllers/recipe.controller");

 router.get("/admin/list", AdminController.adminList);
 router.post("/admin/create", AdminController.adminCreate);
 router.post("/user/create", UserController.createUser);
 router.post("/user/login", UserController.login);
 router.get("/ingredient/list", IngredientsController.ingredientsList);
 router.get("/ingredient/search", IngredientsController.ingredientsSearch);
 router.post("/ingredient/add", IngredientsController.ingredientsAdd);
 router.get("/recipe/search", Recipe.searchRecipe);
 router.post("/recipe/create", Recipe.createRecipe);
 router.post("/user/pantry", Recipe.searchRecipe);
 router.get("/recipe/searchByRecipe", Recipe.searchByRecipe);
 
 router.get("/searchByRecipe", Recipe.searchByRecipe);
 router.get("/searchByIngredient", Recipe.searchByIngredient);
 router.post("/test", Recipe.test);

module.exports = router;