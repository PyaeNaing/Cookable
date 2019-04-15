//MYSQL NODE----------------------------------------------------------------
const mysql = require("mysql");
let sqlConnection;
let pool;

function connectDb() {
    if (pool) return pool;
    pool = mysql.createPool({
        host: "cookabledb.cjrhtew0vlgi.us-east-2.rds.amazonaws.com",
        user: "master",
        password: "TdWvQM3e75bbsXvyEvbR",
        database: "CookableDBv3"
    });
}
connectDb();
//--------------------------------------------------------------------------

//SEQUELIZE
const Ingredient = require("../models/ingredients");
const Admin = require("../models/admins")

exports.ingredientsList = function (req, res) {
    Ingredient.findAll().then(function (ingridients) {
        res.send(ingridients);
    }).catch(function (err) {
        res.send("error");
    });
}

exports.ingredientsSearch = function (req, res) {

    /*    Ingredient.findOne({
            where: {
                ingredientName: req.query.s,
            }.then(ingridient => {
                res.send(ingridient);
            }).catch(function (err) {
                res.send("error");
            })
        })
    */
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
    Ingredient.create({
        where: {
            ingredientName: req.body.ingredientName,
            ingredientType: req.body.ingredientType,
            description: req.body.description,
        }
    }).then((ingridient) => {
        console.log(ingridient.get({ plain: true }));
        res.send(ingridient.get({ plain: true }));
    }).catch(err => {
        res.send('Error');
        console.log(err)
    })
}