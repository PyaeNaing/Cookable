const User = require('../models/users');
const processor = require('../controllers/processor');
const Ingredient = require('../models/ingredients')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.createUser = function (req, res) {

        let pass = req.body.password;
        pass = Buffer.from(pass, 'utf8').toString('base64');

        User.findOrCreate({
            where: {
            username: req.body.username,
            password: pass,
            emailAddress: req.body.email}})
        .then(([user, created]) => {
            console.log(created);
            res.json({username: req.body.username,
                password: pass,
                emailAddress: req.body.email});
          })
          .catch(err => {
           res.status(500).send('Error: Server side issue. '+err);
           console.log(err)})
        },

exports.login = function(req, res){

    let pass = req.body.password;
        pass = Buffer.from(pass, 'utf8').toString('base64');

    User.findOne({
        where: {
            [Op.or]: [{username: req.body.user}, {emailAddress: req.body.user}],
            password: pass
          }
    }).then(result => {
        if(result != null){
            res.send(result);
        }
        else{
            res.send('False');
        }
    }).catch(err => res.status(500).send('Error: Please send correct object'+err));
  },

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
                res.status(404).send('Error: ingredient not found')
            }
          })
          .catch(err => {
            res.send("Error");
            console.log(err);
          });
      } else {
        res.status(404).send("Error: User not found");
      }
    })
    .catch(err => {
      res.send("Error");
      console.log(err);
    })
  }
