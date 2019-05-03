const Sequelize = require('sequelize');
const db = require('../database');

const pantryHasIngredients =  db.define('pantryHasIngredients', {

    pantryID:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ingredientID:{
        type: Sequelize.INTEGER
    },
    userID:{
        type: Sequelize.INTEGER
    }
})

module.exports = pantryHasIngredients;