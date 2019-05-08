const Recipe = require("../models/recipe");
const Sequelize = require("sequelize");
const recipeImages = require("../models/recipeImages");
const ingredientList = require("../models/ingredientsListFulls");
const Op = Sequelize.Op;

exports.createRecipe = function (req, res) {
  Recipe.create({
    recipeName: req.body.recipeName,
    description: req.body.description,
    cuisine: req.body.cuisine,
    calorieCount: req.body.calorieCount,
    cookingTime: req.body.cookingTime,
    authorName: req.body.authorName,
    userID: req.body.userID,
    isUserCreated: req.body.isUserCreated
  })
    .then(recipe => {
      console.log(recipe.get({ plain: true }));
      res.send(recipe.get({ plain: true }));
    })
    .catch(err => {
      res.send("Error");
      console.log(err);
    });
};

exports.searchRecipe = function (req, res) {
  (limit = 20),
    Recipe.findOne({
      where: { recipeName: { [Op.like]: "%" + req.query.recipeName + "%" } }
    })
      .then(recipes => {
        res.json({ recipe: recipes });
      })
      .catch(function (err) {
        res.send("error");
      });
};

exports.getRecommendation = async function (req, res) {
  let recipe;
  let arr = [];
  let recipeurl;
  try {
    recipe = await getRecipe();
    arr = await getarray(recipe);
    recipeurl = await getImageUrl(arr);
    recipe = await combinethem(recipe, recipeurl)
    res.json(recipe);
  } catch (e) { }
};


exports.searchByRecipe = async function (req, res) {
  let recipe;
  let arr = [];
  let recipeurl;
  try {
    recipe = await getRecipeByName(req);
    arr = await getarray(recipe);
    recipeurl = await getImageUrl(arr);
    recipe = await combinethem(recipe, recipeurl)
    res.json(recipe);
  } catch (e) { }
}

exports.searchByIngredient = async function (req, res) {
  let recipe;
  let ingredientused;
  let arr = [];
  let recipeurl;
  try {
    ingredientused = await getRecipeByIngredient(req);

    arr = await getarrayinorder(ingredientused);
    recipe = await getRecipei(arr);
    recipeurl = await getImageUrl(arr);
    recipe = await combinethem(recipe, recipeurl)
    console.log(arr);
    res.json(recipe);
  } catch (e) { }
}

exports.viewRecipe = function(req, res)
{
  console.log(req.params.id);

  

  res.send(req.params.id);
}

// helper functions

function getRecipeByName(req) {
  return Recipe.findAll({
    where: {
      recipeName: { [Op.like]: '%' + req.query.recipeName + '%' }
    }
  });
}

function getRecipeByIngredient(req) {
  return ingredientList.findAll({
    where: {
      ingredientsFull: { [Op.like]: '%' + req.query.ingredientName + '%' },
    }, raw: true
  })
}

function getarrayinorder(recipe) {
  let arr = [];
  let temp = -1;
  for (let i = 0; i < recipe.length; i++) {
    if (temp != recipe[i].recipeID) {
      arr[i] = recipe[i].recipeID;
      temp = arr[i];
      recipe[i].url = 'https://www.creativefabrica.com/wp-content/uploads/2018/09/Crossed-spoon-and-fork-logo-by-yahyaanasatokillah-580x387.jpg';
    }
    else{
      recipe.splice(i, 1);
      i--;
    }
  }
  return arr;
}

function getarray(recipe) {
  let arr = [];
  for (let i = 0; i < recipe.length; i++) {
    {
      arr[i] = recipe[i].recipeID;
      recipe[i].url = 'https://www.creativefabrica.com/wp-content/uploads/2018/09/Crossed-spoon-and-fork-logo-by-yahyaanasatokillah-580x387.jpg';
    }
  }
  return arr;
}

function combinethem(recipe, recipeUrl) {
  for (let i = 0; i < recipe.length; i++) {
    for (let j = 0; j < recipeUrl.length; j++) {
      if (recipe[i].recipeID === recipeUrl[j].recipeID) {
        recipe[i].url = recipeUrl[j].recipeImageDir;
        break;
      }
    }
  }
  return recipe;
}

function getRecipe() {
  return Recipe.findAll({
    order: [[Sequelize.literal("RAND()")]],
    limit: 8
  });
}

function getImageUrl(arr) {
  return recipeImages.findAll({
    where: {
      recipeID: arr
    }
  });
}

function getRecipei(arr) {
  return Recipe.findAll({
    where: {
      recipeID: arr
    }
  });
}