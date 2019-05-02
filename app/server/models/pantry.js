const Sequelize = require('sequelize');
const db = require('../database');


const pantry = db.define('pantry', {

    pantryID:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    },

    createdAt:{
        type: Sequelize.DATE
    }

})

module.exports = pantry;