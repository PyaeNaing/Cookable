const Sequelize = require('sequelize');
const db = require('../database');

const ingredientsListFull = db.define('ingredientsListFull',{
    ingredientsListFullID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    recipeID: {
        type: Sequelize.INTEGER,
    },
    ingredientsIndex: {
        type: Sequelize.INTEGER,
    },
    ingredientsFull: {
        type: Sequelize.STRING,
    },
})

module.exports = ingredientsListFull;