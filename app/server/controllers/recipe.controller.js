const Recipe = require("../models/recipe");
const Sequelize = require("sequelize");
const recipeImages = require("../models/recipeImages");
const Op = Sequelize.Op;

exports.createRecipe = function(req, res) {
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

exports.searchRecipe = function(req, res) {
  (limit = 20),
    Recipe.findOne({
      where: { recipeName: { [Op.like]: "%" + req.query.recipeName + "%" } }
    })
      .then(recipes => {
        res.json({ recipe: recipes });
      })
      .catch(function(err) {
        res.send("error");
      });
};

exports.getRecommendation = async function(req, res) {
  let recipe;
  let arr = [];
  let recipeurl;
  try {
    recipe = await getRecipe();
    arr = await getarray(recipe);
    recipeurl = await getImageUrl(arr);
    recipe = await combinethem(recipe, recipeurl)
    res.json(recipe);
  } catch (e) {}
};


exports.searchByRecipe = async function(req, res) {

  try {
    Recipe.findAll({
      where: {
        recipeName: {[Op.like] : '%' + req.body.recipeName + '%'}
      }
    }).then(result =>{
      res.json(result);
    }).catch()
  } catch (e) {}
}


exports.searchByIngredients = async function(req, res){
/*  
  try {
    Recipe.findAll({
      where: {
        ingedient: {[Op.like] : '%' + req.body.recipeName + '%'}
      }
    }).then(result =>{
      res.json(result);
    }).catch()
  } catch (e) {}
  */
}


function getarray(recipe) {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    arr[i] = recipe[i].recipeID;
    recipe[i].url = 'https://www.creativefabrica.com/wp-content/uploads/2018/09/Crossed-spoon-and-fork-logo-by-yahyaanasatokillah-580x387.jpg';
  }
  return arr;
}

function combinethem(recipe, recipeUrl) {
  for (let i = 0; i < recipe.length; i++) {
      for(let j = 0; j < recipeUrl.length; j++)
      {
          if(recipe[i].recipeID === recipeUrl[j].recipeID){
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

exports.testSearch = function(req, res) {
  Recipe.findAll({
    where: {
      recipeID: id
    }
  }).then(recipe => {
    res.json(recipe);
  });
};
