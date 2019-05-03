const User = require('../models/users');
const Ingredient = require('../models/ingredients')
const Sequelize = require('sequelize');
const Pantry = require('../models/pantry')
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

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

  exports.addIngredienttoPantry = function(req, res) {
    User.findOne({
      where: {
        userID: req.body.userID
      }
    })
      .then(result => {
        if (result != null) {
          if(result.pantryID != null){
            console.log('Null');
          }
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
              res.send('Error');
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
  ,
  exports.setPassword = function (password) {
    let salt = crypto.randomBytes(16).toString('hex');
    let hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString();
  },

  exports.validatePassword = function (password) {
    //get hash and salt from DB
    let salt;
    let hashDB;
    let hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString();

    return hash === hashDB;
  },

  exports.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    //Get email and id from DB
    let emailDB;
    let idDB;

    return jwt.sign({
      email: emailDB,
      id: idDB,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
  },

  exports.toAuthJSON = function()
  {
    let emailDB;
    let idDB;
    //Get email and ID from DB
    return {
      _id: idDB,
      email: emailDB,
      token: this.generateJWT(),
    };
  }