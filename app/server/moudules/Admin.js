const Sequelize = require('sequelize');
const db = require('../database1');

const admins = db.define('admins', {

    adminID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
        // allowNull defaults to true
    },
    firstName: {
        type: Sequelize.STRING,
        // allowNull defaults to true
    },
    lastName: {
        type: Sequelize.STRING,
    },
    adminRole: {
        type: Sequelize.INTEGER,
    }
}, {

    })

module.exports = admins;