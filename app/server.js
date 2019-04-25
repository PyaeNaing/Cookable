//Dependencies
require('dotenv').config();
const express = require("express");
const session = require('express-session');
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const path = require("path");
const passport = require('passport');
const Sequelize = require('sequelize');
const port = process.env.port || 4000;

//Route
const v1 = require("./server/routes/v1");
const v2 = require("./server/routes/v2");

const app = express();

// for passport
app.use(session({ secret: 'secret',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize()); 
app.use(passport.session());

//Set up json parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//for sequelize


//Cross-Origin Resource Sharing
app.use(cors());

//App uses routes version 1
app.use("/v1", v1);
app.use("/v1", v2 );

//Testing port...
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;

// Uncaught
process.on('unhandledRejection', error => {
  console.error('Uncaught Error', pe(error));
});