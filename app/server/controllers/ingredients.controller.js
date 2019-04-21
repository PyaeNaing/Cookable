const Ingredient = require("../models/ingredients");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.ingredientsList = function (req, res) {
    Ingredient.findAll().then(function (ingridients) {
        res.send(ingridients);
    }).catch(function (err) {
        res.send("error");  
    });
}

exports.ingredientsSearch = function (req, res) {

    limit = 20,
    Ingredient.findAll({
        where: {
            ingredientName: {[Op.like] : '%' + req.query.s + '%'}
        }
    }).then(ingredients => {
        console.log(ingredients);
        res.json({
            ingredients: ingredients
        });
    }).catch(function (err) {
        res.send("error");
    })
}

exports.ingredientsAdd = function (req, res) {
    Ingredient.create({
        ingredientName: req.body.ingredientName,
        ingredientType: req.body.ingredientType,
        description: req.body.description
    })
        .then((ingridient) => {
            console.log(ingridient.get({ plain: true }));
            res.send(ingridient.get({ plain: true }));
        })
        .catch(err => {
            res.send('Error');
            console.log(err)
        })
}