const db = require("../database");
const processor = require('./processor');
const db1 = require('../config/database1');
const User = require('../config/User');
let sqlConnection = db.connectDb();

exports.createUser = function (req, res) {
        User.create({ username: res.username, password: res.password, email: res.email })
        .then(result => {
            res.send('OK');
          })
          .catch(err => res.send('Error'), console.log(err))
        },
exports.login = function(req, res){
    let username = req.body.username;
    let password = req.body.password;
    var sqlString = 'SELECT * FROM cookabledb1.users where username = ? and password = ?';
    sqlConnection.query(sqlString,[username,password], function(err, result){
        if(err) {
            // console.log('false1');
            res.end('false')}
        else{
            
            if (result.length > 0){
                // console.log('true2');
                res.end(processor.hash(username,password));
            }
            else{
                // console.log('false3');
                res.end('false');   
            }
        }
    });
}