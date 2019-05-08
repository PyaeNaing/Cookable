const express = require('express');
const passport = require('passport');


const router = express.Router();

const AdminController = require("../controllers/admins.controller");
const UserController = require("../controllers/users.controller");
const IngredientsController = require("../controllers/ingredients.controller");
const Recipe = require("../controllers/recipe.controller");

router.get("/admin/list", AdminController.adminList);
router.post("/admin/create", AdminController.adminCreate);
router.post("/user/create", UserController.createUser);

router.post("/user/login", UserController.login);

router.get("/ingredient/list", IngredientsController.ingredientsList);
router.get("/ingredient/search", IngredientsController.ingredientsSearch);
router.post("/ingredient/add", IngredientsController.ingredientsAdd);
router.get("/recipe/search", Recipe.searchRecipe);
router.get("/recipe/searchByRecipe", Recipe.searchByRecipe);
router.get("/recipe/searchByIngredient", Recipe.searchByIngredient);
router.post("/recipe/create", Recipe.createRecipe);
router.post("/user/pantry", Recipe.searchRecipe);
router.get("/searchByRecipe", Recipe.searchByRecipe);
router.get("/searchByIngredient", Recipe.searchByIngredient);
// router.get("/test", Recipe.getRecipeInstruction);



router.get('/protected', passport.authenticate('jwt', { session: false }), function (req, res) {

    console.log(req.user.userID);

    res.json({
        msg: 'Congrats! You are seeing this because you are authorized',
        "userID": req.user.userID,
        "username": req.user.username,
        "emailAddress": req.user.emailAddress
    });

});

//  router.get("/test", Recipe.testSearch);


module.exports = router;