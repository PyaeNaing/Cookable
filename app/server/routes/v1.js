const express 			= require('express');


const router 			= express.Router();

const AdminController   = require("../controllers/admin.controller");
const UserController   = require("../controllers/user.controller");
const IngredientsController   = require("../controllers/ingredients.controller");
const Recipe = require("../controllers/recipe.controller");

router.get("/admins", AdminController.adminList);
router.post("/createAdmin", AdminController.adminCreate);
router.post("/createUser", UserController.createUser);
router.post("/login", UserController.login);
router.get("/allIngredients", IngredientsController.ingredientsList);
router.get("/searchIngredients", IngredientsController.ingredientsSearch);
router.post("/createIngredient", IngredientsController.ingredientsAdd);
router.get("/searchRecipe", Recipe.searchRecipe);
router.post("/createRecipe", Recipe.createRecipe);



module.exports = router;