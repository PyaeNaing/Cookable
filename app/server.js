//Dependencies
require('dotenv').config();
const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const path = require("path");


const port = process.env.port || 4000;

//Route
const v1 = require("./server/routes/v1");
const userController   = require("./server/controllers/user.controller");
const app = express();

//Set up json parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cross-Origin Resource Sharing
app.use(cors());

//App uses routes version 1
app.use("/v1", v1);


app.listen(port, () => console.log(`Listening on port ${port}`));


// Simple test for front-backend connection
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

module.exports = app;

// Uncaught
process.on('unhandledRejection', error => {
  console.error('Uncaught Error', pe(error));
});