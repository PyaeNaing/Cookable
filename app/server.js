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

var db = mysql.createConnection({
  host: "cookabledb.cjrhtew0vlgi.us-east-2.rds.amazonaws.com",
  user: "master",
  password: "TdWvQM3e75bbsXvyEvbR",
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

app.post("/createUser", function(req, res) {
  var username = req.body.user;
  var password = req.body.password;
  if(req.body!= null){
    db.query("INSERT INTO users (name, password) VALUES (?,?)", [username, password], function(error, result){
      if (error){
        console.log(error);
        res.end(error);
      }
      else{
        console.log(result);
        res.end(result);
      }
    });
  }
  console.log("Username = "+username+", Password = "+password);



  res.end('thanks');

});

app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
