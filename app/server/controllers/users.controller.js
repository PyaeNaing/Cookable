const User = require("../models/users");
const Ingredient = require("../models/ingredients");
const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Op = Sequelize.Op;
let secretOrKey = "cinamonbun";

exports.createUser = function (req, res) {
  let salt = crypto.randomBytes(16).toString("hex");
  let pass = req.body.password;
  let hash = crypto.pbkdf2Sync(pass, salt, 10000, 512, "sha512").toString();

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
      if (err.name == "SequelizeUniqueConstraintError") {
        res.send("Username and/or Email already in use");
      } else {
        res.status(500).send("Error: Server side issue. " + err);
      }
    });
};

exports.login = function (req, res) {
  User.findOne({
    where: {
      [Op.or]: [{ username: req.body.user }, { emailAddress: req.body.user }]
    }
  })
    .then(result => {
      console.log(result.salt);
      let hash = crypto
        .pbkdf2Sync(req.body.password, result.salt, 10000, 512, "sha512")
        .toString();

      if (result != null && result.password === hash) {
        let payload = { sub: result.userID };
        let token = jwt.sign(payload, secretOrKey);
        res.json({
          userID: result.userID,
          username: result.username,
          emailAddress: result.emailAddress,
          createdAt: result.createdAt,
          token: token
        });
      } else {
        res.send("False");
      }
    })
    .catch(err =>
      res.status(500).send("Error: Please send correct object" + err)
    );
};

exports.authenticateUser = function (req, res) {
  res.json({
    msg: 'Congrats! You are seeing this because you are authorized',
    "userID": req.user.userID,
    "username": req.user.username,
    "emailAddress": req.user.emailAddress
  });
};

exports.editProfile = function (req, res) {
  User.findOne({
    where: {
      userID: req.body.userID
    },
    attributes: { exclude: ['password', 'salt', 'createdAt'] }
  }).then(result => {
    result.update(
      {fName: req.body.fName},
      {lName: req.body.lName},
      {dob: req.body.dob},
      {gender: req.body.lName},
    )
    res.status(200).json(result)
  }).catch(e => {
    console.log(e);
    res.status(500).send('Error: ' + e);
  })
}

exports.getProfile = function (req, res) {
  User.findOne({
    where: {
      userID: req.body.userID
    },
    attributes: { exclude: ['password', 'salt', 'createdAt'] }
  }).then(result => {
    res.status(200).json(result)
  }).catch(e => {
    console.log(e);
    res.send('Error: ' + e);
  })
}