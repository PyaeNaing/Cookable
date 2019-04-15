const Sequelize = require('sequelize');
const db = require('../database1');

const users = db.define('users', {

  userId: {
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