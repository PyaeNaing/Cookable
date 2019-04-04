const mysql = require("mysql");
let pool;
let sqlConnection;

module.exports = {
  connectDb : function(){
    if (pool) return pool;
    pool = mysql.createPool({
      host: "cookabledb.cjrhtew0vlgi.us-east-2.rds.amazonaws.com",
      user: "master",
      password: "TdWvQM3e75bbsXvyEvbR",
      database: "cookabledb1"
    });

    // pool.getConnection(function (err, connection) {
    //   if (err) return console.log("Error: " + err);
  
    //   //Connect to DB
    //   sqlConnection = connection;
  // })
    // return sqlConnection;
  },
  
};
