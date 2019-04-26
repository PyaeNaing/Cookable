const Recipe = require('../models/recipe')
const Sequelize = require('sequelize');
var imageUrl = require('../models/recipeImages')
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
        .then((recipe) => {
            console.log(recipe.get({ plain: true }));
            res.send(recipe.get({ plain: true }));
        })
        .catch(err => {
            res.send('Error');
            console.log(err)
        });
}

exports.searchRecipe = function (req, res) {
    limit = 20,
        Recipe.findOne({
            where:
                { recipeName: { [Op.like]: '%' + req.query.recipeName + '%' } }
        }).then(recipes => {
            res.json({ recipe: recipes });
        }).catch(function (err) {
            res.send("error");
        })
}

exports.getRecommendation = function (req, res) {
    Recipe.findAll(
        {
            order: [[Sequelize.literal('RAND()')]],
            limit: 8,
        }
    )
        .then((recipe) => {
            for(let i = 0; i < 8; i++)
            {
            recipe[i].url = 'https://images.media-allrecipes.com/userphotos/300x300/25840.jpg';
            }
            res.json(recipe);
        }).catch('Error')
}

exports.testSearch = function(req, res) {
    Recipe.findAll({
        where:{
            recipeID : id,
        }
    }).then(recipe => {
        res.json(recipe);
    })

}