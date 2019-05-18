const Recipe = require("../models/recipe");
const Favorites = require("../models/favorites");
const Likes = require("../models/likes");
const Reviews = require("../models/reviews");
const Sequelize = require("sequelize");
const RecipeImages = require("../models/recipeImages");
const ingredientList = require("../models/ingredientsListFulls");
const instructions = require("../models/instructions");
const defaultImageUrl =
  "https://www.creativefabrica.com/wp-content/uploads/2018/09/Crossed-spoon-and-fork-logo-by-yahyaanasatokillah-580x387.jpg";
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

exports.getFavorite = function (req, res) {

  let arr = [];
  Favorites.findAll({
    where: {
      userID: req.query.userID
    }
  }).then(r => {
    for (let i = 0; i < r.length; i++) {
      arr[i] = r[i].recipeID;
    }
    console.log(arr);
    Recipe.findAll(
      {
        where: {
          recipeID: arr
        }
      }
    ).then(async recipe => {
      let arr2 = await getarray(recipe);
      let recipeurl = await getImageUrl(arr2);
      recipe = await combinethem(recipe, recipeurl);
      res.json(recipe);
    })
  }).catch(e => {
    res.send("Error: " + e);
  })
};

exports.getUserRecipe = function (req, res) {
  Recipe.findAll({
    where: {
      userID: req.query.userID
    }
  }).then(async recipe => {
    let arr2 = await getarray(recipe);
    let recipeurl = await getImageUrl(arr2);
    recipe = await combinethem(recipe, recipeurl);
    res.json(recipe);
  })
}

exports.getRecommendation = async function (req, res) {
  let recipe;
  let arr = [];
  let recipeurl;
  try {
    recipe = await getRecipe();
    arr = await getarray(recipe);
    recipeurl = await getImageUrl(arr);
    recipe = await combinethem(recipe, recipeurl);
    res.json(recipe);
  } catch (e) {
    res.send("Error: " + e);
  }
};

exports.searchRecipe = async function (req, res) {
  try {
    let recipeSearch;
    let ingredientSearch;
    recipeSearch = await searchByRecipe(req.query.recipe);
    ingredientSearch = await searchByIngredient(req.query.recipe);
    let result = recipeSearch.concat(ingredientSearch).unique();
    res.status(200).json(result);
  } catch (e) {
    res.status(200).send("Error: " + e);
  }
};

Array.prototype.unique = function () {
  var a = this.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i].recipeID === a[j].recipeID) a.splice(j--, 1);
    }
  }
  return a;
};

async function searchByRecipe(req) {
  let recipe;
  let arr = [];
  let recipeurl;
  try {
    recipe = await getRecipeByName(req);
    arr = await getarray(recipe);
    recipeurl = await getImageUrl(arr);
    recipe = await combinethem(recipe, recipeurl);
    return recipe;
  } catch (e) {
    return e;
  }
}

async function searchByIngredient(req) {
  let recipe;
  let ingredientused;
  let arr = [];
  let recipeurl;
  try {
    ingredientused = await getRecipeByIngredient(req);

    arr = await getarrayinorder(ingredientused);
    recipe = await getRecipei(arr);
    recipeurl = await getImageUrl(arr);
    recipe = await combinethem(recipe, recipeurl);
    return recipe;
  } catch (e) {
    return e;
  }
}

exports.viewRecipe = function (req, res) {
  Recipe.hasMany(RecipeImages, { foreignKey: "recipeID" });
  Recipe.hasMany(Likes, { foreignKey: "recipeID" });
  Recipe.hasMany(Favorites, { foreignKey: "recipeID" });
  Recipe.hasMany(Reviews, { foreignKey: "recipeID" });
  Recipe.hasMany(instructions, { foreignKey: "recipeID" });
  Recipe.hasMany(ingredientList, { foreignKey: "recipeID" });

  RecipeImages.belongsTo(Recipe, { foreignKey: "recipeID" });
  Likes.belongsTo(Recipe, { foreignKey: "recipeID" });
  Favorites.belongsTo(Recipe, { foreignKey: "recipeID" });
  Reviews.belongsTo(Recipe, { foreignKey: "recipeID" });
  instructions.belongsTo(Recipe, { foreignKey: "recipeID" });
  ingredientList.belongsTo(Recipe, { foreignKey: "recipeID" });

  Recipe.findOne({
    where: { recipeID: req.params.id },
    include: [
      RecipeImages,
      Likes,
      Favorites,
      Reviews,
      instructions,
      ingredientList
    ]
  })
    .then(recipe => {
      res.send(recipe);
    })
    .catch(err => res.status(500).send("Error: " + err));
};

exports.pantrySearchRecipe = function (req, res) {
  let searchArray = "";
  req.body.forEach(element => {
    searchArray = searchArray + element + "|";
  });
  searchArray = searchArray.substring(0, searchArray.length - 1);
  console.log("Here " + searchArray);


  const ingredientMatchCount = ingredientList.findAll({
    group: ['recipeID'],
    attributes: ['recipeID', [Sequelize.fn('COUNT', 'recipeID'), 'count']],
    where: {
      ingredientsFull: { [Op.regexp]: searchArray }
    }
  });

  const allCount = ingredientList.findAll(
    {
      group: ['recipeID'],
      attributes: ['recipeID', [Sequelize.fn('COUNT', 'recipeID'), 'count']],
    }
  )

  Promise
    .all([ingredientMatchCount, allCount]).then(promises => {
      let results = [];
      for (let x = 0; x < promises[0].length; x++) {
        for (let y = 0; y < promises[1].length; y++) {
          if(promises[0][x].dataValues.recipeID == promises[1][y].dataValues.recipeID && promises[0][x].dataValues.count == promises[1][y].dataValues.count)
          {
            results.push(promises[0][x].dataValues.recipeID);
          }
        }
      }

      res.send(results);
    }).catch(err => res.status(500).send("Error: " + err))
};

exports.getRecipeInstruction = function (req, res) {
  Recipe.findOne({
    where: { recipeName: { [Op.like]: "%" + req.query.recipeName + "%" } }
  })
    .then(recipe => {
      if (recipe != null) {
        instructions
          .findAll({
            where: {
              recipeID: recipe.recipeID
            }
          })
          .then(i => {
            res.json(i);
          })
          .catch(e => {
            console.log(e);
            res.status(500).send("Errror: " + e);
          });
      } else {
        res.status(404).send("Cannot find Instruction");
      }
    })
    .catch(e => {
      res.send("Error");
      console.log(e);
    });
};

// helper functions
function getRecipeByName(req) {
  return Recipe.findAll({
    where: {
      recipeName: { [Op.like]: "%" + req + "%" }
    },
    raw: true
  });
}

function getRecipeByIngredient(req) {
  return ingredientList.findAll({
    where: {
      ingredientsFull: { [Op.like]: "%" + req + "%" }
    },
    raw: true
  });
}

function getarrayinorder(recipe) {
  let arr = [];
  let temp = -1;
  for (let i = 0; i < recipe.length; i++) {
    if (temp != recipe[i].recipeID) {
      arr[i] = recipe[i].recipeID;
      temp = arr[i];
      recipe[i].url = defaultImageUrl;
    } else {
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
      recipe[i].url = defaultImageUrl;
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
  return RecipeImages.findAll({
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
