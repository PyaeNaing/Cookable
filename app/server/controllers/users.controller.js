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