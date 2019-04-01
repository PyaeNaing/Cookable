const db = require("../database");
var sqlConnection = db.connectDb();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

module.exports = {
    /*
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
    },
    */
    
    hash: function(username,password){
        const today = new Date();
        const expirationDate = new Date(today);
        expirationDate.setDate(today.getDate() + 60);
      
        return jwt.sign({
          email: this.username,
          id: this._id,
          exp: parseInt(expirationDate.getTime() / 1000, 10),
        }, 'secret');
    }
}