const Sequelize = require('sequelize');

module.exports = new Sequelize('cookabledb1', 'master', 'TdWvQM3e75bbsXvyEvbR', {
  host: "cookabledb.cjrhtew0vlgi.us-east-2.rds.amazonaws.com",
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  }

});
