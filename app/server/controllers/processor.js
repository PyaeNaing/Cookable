const db = require("../database1");
var sqlConnection = db.connectDb();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

module.exports = {

    findAll: function(username, password, email){

    },
    
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