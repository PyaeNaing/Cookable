const db = require("../database");

// Get db
let sqlConnection = db.connectDb();


exports.adminList = function (req, res) {
    let sqlString = "SELECT * FROM cookabledb1.admin;"
    sqlConnection.query(sqlString, function (err, results, fields) {
        if (err) console.log("DB connection failed: " + err);
        res.send(results);
    })
}

exports.adminCreate = function (req, res) {
    let id = req.body.id;
    let first = req.body.first;
    let last = req.body.last;
    let role = req.body.role;
    let sqlString = "INSERT INTO cookabledb1.admin (id, first, last, role) VALUES (?,?,?,?)";

    sqlConnection.query(sqlString, [id, first, last, role], function (err, result) {
        if (err) { console.log(err) }
        else {
            res.end(result);
        }
    })
    
}