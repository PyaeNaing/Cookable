const Ingredient = require("../models/ingredients");
const Pantry = require("../models/userHasIngredients");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.ingredientsList = function(req, res) {
  Ingredient.findAll()
    .then(function(ingridients) {
      res.send(ingridients);
    })
    .catch(function(err) {
      res.send("error");
    });
};

exports.ingredientsSearch = function(req, res) {
  (limit = 20),
    Ingredient.findAll({
      where: {
        ingredientName: { [Op.like]: "%" + req.query.ingredients + "%" }
      }
    })
      .then(ingredients => {
        console.log(ingredients);
        res.json({
          ingredients: ingredients
        });
      })
      .catch(function(err) {
        res.send("error");
      });
};

exports.ingredientsAdd = function(req, res) {
  Ingredient.create({
    ingredientName: req.body.ingredientName,
    ingredientType: req.body.ingredientType,
    description: req.body.description
  })
    .then(ingridient => {
      console.log(ingridient.get({ plain: true }));
      res.send(ingridient.get({ plain: true }));
    })
    .catch(err => {
      res.send("Error");
      console.log(err);
    });
};

exports.getIngredientfromPantry = async function(req, res) {
  let ingredients;
  let ingredientName = [];
  try {
    ingredients = await getIngredientsFromPantry(req);
    ingredientName = await getIngredientID(ingredients);
    res.send(ingredientName);
  } catch (e) {
    console.log(e);
    res.send("Error");
  }
};

exports.addIngredienttoPantry = function(req, res) {
  try {
    Ingredient.findOne({
      where: {
        ingredientName: { [Op.like]: "%" + req.body.ingredientName + "%" }
      }
    }).then(i => {
      if (i != null) {
        Pantry.findOrCreate({
          where: {
            ingredientID: i.ingredientID,
            ingredientName: i.ingredientName,
            userID: req.body.userID
          }
        }).then(pantry => {
          res.send(pantry);
        });
      } else {
        res.status(404).send("Ingredient Not Found");
      }
    });
  } catch (e) {
    console.log(e);
    res.send("Error");
  }
};

// Helper Functions
function getIngredientsFromPantry(req) {
  return Pantry.findAll({
    where: {
      userID: req.query.userID
    }
  });
}

function getIngredientID(ingredients) {
  let arr = [];
  for (let i = 0; i < ingredients.length; i++) {
    arr[i] = ingredients[i].ingredientName;
  }
  return arr;
}

function getIngredientname(ingredients) {}
