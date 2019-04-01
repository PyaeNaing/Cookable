const Sequelize = require('sequelize');
const db = require('./database1');

const users = db.define('users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        // allowNull defaults to true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        // allowNull defaults to true
      },
},{
    timestamps: false,
})

module.exports = users;