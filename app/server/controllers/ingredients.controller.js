const db = require("../database");

// Get db
const pool = db.connectDb();

exports.ingredientsList = function (req, res) {
    let sqlString = "SELECT * FROM CookableDBv3.ingredients;"
    pool.query(sqlString, function (err, results) {
        if (err) console.log("DB connection failed: " + err);
        console.log(results);
        res.send(results);
    })

}

exports.ingredientsSearch = function (req, res) {
    let text = req.query.s;
    text = "%" + text + "%";
    console.log(text);
    let sqlString = "SELECT * FROM CookableDBv3.ingredients WHERE ingredientName LIKE ?";

    pool.query(sqlString, [text], function (err, result) {
        if (err) {
            console.log(err);
            res.status(500);
        }
        else {
            res.send(result);
        }
    })
}

exports.ingredientsAdd = function (req, res) {
    let ingredientName = req.body.ingredientName;
    let ingredientType = req.body.ingredientType;
    let description = req.body.description;

    let sqlString = "INSERT INTO CookableDBv3.ingredients (ingredientName, ingredientType, description) VALUES ( ?, ?, ? )";

    pool.query(sqlString, [ingredientName, ingredientType, description], function (err, result) {
        if (err) { console.log(err); res.status(500); }
        else {
            res.status(200);
            res.json({'ingredientName':ingredientName,'ingredientType':ingredientType,'description':description});
        }
    })
}