const Sequelize = require('sequelize');
const db = require('../database');

const pantryHasIngredients =  db.define('pantryHasIngredients', {

    pantryID:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    ingredientID:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    }
})

module.exports = pantryHasIngredients;