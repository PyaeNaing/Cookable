const Sequelize = require('sequelize');
const db = require('../database');

const users = db.define('users', {

  userID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    // allowNull defaults to true
  },
  emailAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    // allowNull defaults to true
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  pantryID: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
}, {

  })

module.exports = users;