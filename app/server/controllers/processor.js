const db = require("../database");
var sqlConnection = db.connectDb();

module.exports = {
    login : async function(username, password){
    var sqlString = 'SELECT * FROM cookabledb1.users where username = ? and password = ?';
    sqlConnection.query(sqlString,[username,password], function(err, result){
        if(err) {return (false)}
        else{
            
            if (result.length > 0){
                return  true;
            }
            else{
                return (false);   
            }
        }
    });
       return (false);
    }
}