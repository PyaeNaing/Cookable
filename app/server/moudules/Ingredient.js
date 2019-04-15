const Sequelize = require('sequelize');
const db = require('../database1');

const ingredients = db.define('ingredients',{
    ingredientID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ingredientName: {
        type: Sequelize.STRING,
    },
    ingredientType: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    createdat: {
        type: Sequelize.DATE,
    }
})

module.export = ingredients;