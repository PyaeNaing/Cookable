const db = require("../database");

// Get db
const pool = db.getPool();
let sqlConnection;

pool.getConnection(function(err, connection)
{
    if(err) return console.log("Error: " + err);
    
    //Connect to DB
    sqlConnection = connection;
})

exports.admin_list = function(req, res)
{
    let sqlString = "SELECT * FROM test.admin;"
    sqlConnection.query(sqlString, function(err, results, fields)
    {
        if(err) console.log("DB connection failed: " + err);
        console.log(results);
    })
    res.send("implement admin list");
}