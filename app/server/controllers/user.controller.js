const db = require("../database");
const processor = require('./processor');
let sqlConnection = db.connectDb();

exports.userCreate = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let sqlString = "INSERT INTO cookabledb1.users (username, password, email) VALUES (?,?,?)";
    sqlConnection.query(sqlString, [username, password, email], function (err, result) {
        if (err) { console.log(err) }
        else {
            console.log(result);
            res.end(result);
        }
    })
    res.send("OK");
}

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
                res.end('true');
            }
            else{
                // console.log('false3');
                res.end('false');   
            }
        }
    });
}