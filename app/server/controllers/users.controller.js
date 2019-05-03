const User = require('../models/users');
const Ingredient = require('../models/ingredients')
const Sequelize = require('sequelize');
const Pantry = require('../models/pantry')
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const Op = Sequelize.Op;

exports.createUser = function (req, res) {
  let salt = crypto.randomBytes(16).toString('hex');
  let pass = req.body.password;
  let hash = crypto.pbkdf2Sync(pass, salt, 10000, 512, 'sha512').toString();

  User.findOrCreate({
    where: {
      username: req.body.username,
      password: hash,
      emailAddress: req.body.email,
      salt: salt
    }
  })
    .then(([user, created]) => {
      console.log(created);
      res.json({
        username: req.body.username,
        password: pass,
        emailAddress: req.body.email
      });
    })
    .catch(err => {
      if (err.name == 'SequelizeUniqueConstraintError') {
        res.send("Username and/or Email already in use");
      }
      else { res.status(500).send('Error: Server side issue. ' + err); }
    })
},

  exports.login = function (req, res) {

    User.findOne({
      where: {
        [Op.or]: [{ username: req.body.user }, { emailAddress: req.body.user }]
      }
    }).then(result => {

      console.log(result.salt);
      let hash = crypto.pbkdf2Sync(req.body.password, result.salt, 10000, 512, 'sha512').toString();

      if (result != null && result.password === hash) {
        res.send(
          {
            "userID": result.userID,
            "username": result.username,
            "emailAddress": result.emailAddress,
            "createdAt": result.createdAt,
            "pantryID": result.pantryID
          }
        );
      }
      else {
        res.send('False');
      }
    }).catch(err => res.status(500).send('Error: Please send correct object' + err));
  },

  exports.addIngredienttoPantry = function (req, res) {
    User.findOne({
      where: {
        userID: req.body.userID
      }
    })
      .then(result => {
        if (result != null) {
          if (result.pantryID != null) {
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

  exports.toAuthJSON = function () {
    let emailDB;
    let idDB;
    //Get email and ID from DB
    return {
      _id: idDB,
      email: emailDB,
      token: this.generateJWT(),
    };
  }