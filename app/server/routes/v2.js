const express = require('express');
const passport = require('passport');
const router = express.Router();

//CONTROLLERS
const AdminController = require("../controllers/admins.controller");
const UserController = require("../controllers/users.controller");
const IngredientsController = require("../controllers/ingredients.controller");
const RecipeController = require("../controllers/recipe.controller");

//ADMIN
router.get("/admin/list", AdminController.adminList);
router.post("/admin/create", AdminController.adminCreate);

//USERS
router.post("/user/login", UserController.login);
router.post("/user/create", UserController.createUser);
router.get("/user/pantry", IngredientsController.getIngredientfromPantry);
router.post("/user/addtoPantry", IngredientsController.addIngredienttoPantry);
router.get('/protected', passport.authenticate('jwt', { session: false }), function (req, res) {

    console.log(req.user.userID);

    res.json({
        msg: 'Congrats! You are seeing this because you are authorized',
        "userID": req.user.userID,
        "username": req.user.username,
        "emailAddress": req.user.emailAddress
    });

});

//INGREDIENTS
router.get("/ingredient/list", IngredientsController.ingredientsList);
router.get("/ingredient/search", IngredientsController.ingredientsSearch);
router.post("/ingredient/add", IngredientsController.ingredientsAdd);

//RECIPES
router.get("/recipe/:id",RecipeController.viewRecipe);
router.get("/recipe/search", RecipeController.searchRecipe);
router.post("/recipe/create", RecipeController.createRecipe);
router.get("/recipe/searchByRecipe", RecipeController.searchByRecipe);
router.get("/searchByIngredient", RecipeController.searchByIngredient);
router.get("/recipe/instructions", RecipeController.getRecipeInstruction);

module.exports = router;