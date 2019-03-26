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

exports.createUser = function(req, res)
{
  console.log("got to here");
    var username = req.body.user;
    var password = req.body.password;
    if(req.body!= null){
      sqlConnection.query("INSERT INTO test.users (name, password) VALUES (?,?)", [username, password], function(error, result){
        if (error){
          console.log(error);
          res.end(error);
        }
        else{
          console.log(result);
          res.send(result);
        }
      });
    }
    console.log("Username = "+username+", Password = "+password);
}