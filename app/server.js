const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const mysql = require("mysql");
const path = require("path");
const port = process.env.PORT || 4000;
//WHEN USING STATIC PAGES
//app.use(express.static(__dirname + '/public'));
//Reg listen on 3k
//app.listen(3000, () => console.log('Server running on port 3000'))

//CONNECT TO REACT
// console.log that your server is up and running

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

db.connect(function(error) {
  if (error) {
    console.log("Error");
  } else {
    console.log("Connected");
  }
});

//create db
app.get('/createdb', (req, res)=>{
  let sql = 'CREATE DATABASE test';
  db.query(sql, (error, result)=>{
    if(error){
      console.log('Error');
      res.send('Error');
    }
    else{
      console.log(result);
      res.send('Database Created ...');
    }
  })
});

app.get('/createuserstable', (req, res)=>{
  let sql = 'CREATE TABLE users(name VARCHAR(255), password VARCHAR(255))';
  db.query(sql, (error, result)=> {
    if(error)
    {
      res.send(error);
      console.log('Error');
    }
    else{
      res.send(result)
      console.log(result);
    }
  })
});

app.post("/create", function(req, res) {
  var username = req.body.user;
  var password = req.body.password;
  console.log("User name = "+username+", password is "+password);
  res.end('thanks');

});

app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
