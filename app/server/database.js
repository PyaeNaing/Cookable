const mysql = require("mysql");

let pool;

module.exports = {
  getPool: function () {
    if (pool) return pool;
    pool = mysql.createPool({
      host: "cookabledb.cjrhtew0vlgi.us-east-2.rds.amazonaws.com",
      user: "master",
      password: "TdWvQM3e75bbsXvyEvbR",
      database: "test"
    });
    return pool;
  }
};