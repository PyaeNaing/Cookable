const db = require("../database");

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

    res.send(true);
}