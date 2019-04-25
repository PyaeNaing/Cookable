const User = require("../models/users");
const pantryIngredients = require("../models/pantryHasIngredients");
const Ingredient = require("../models/ingredients");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const processor = require("../controllers/processor");

(exports.createUser = function(req, res) {
  User.findOrCreate({
    where: {
      username: req.body.username,
      password: req.body.password,
      emailAddress: req.body.emailAddress
    }
  })
    .then(([user, created]) => {
      console.log(created);
      res.send(created);
    })
    .catch(err => {
      res.send("Error");
      console.log(err);
    });
}),
  (exports.login = function(req, res) {
    User.findOne({
      where: Sequelize.or(
        { username: req.body.username, password: req.body.password },
        { emailAddress: req.body.emailAddress, password: req.body.password }
      )
    })
      .then(result => {
        if (result != null) {
          res.send(processor.hash(req.body.username, req.body.password));
        } else {
          res.send("false");
        }
      })
      .catch(err => {
        res.send("Error");
        console.log(console.log(err));
      });
  });

exports.addIngredient = function(req, res) {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(result => {
      if (result != null) {
        Ingredient.findOne({
          where: {
            ingredientName: req.body.ingredientName
          }
        })
          .then(iresult => {
            if (iresult != null) {
              res.send(iresult);
            } else {
                res.send('Error')
            }
          })
          .catch(err => {
            res.send("Error");
          });
      } else {
        res.send("Error");
      }
    })
    .catch(err => {
      res.send("Error");
    });
};
