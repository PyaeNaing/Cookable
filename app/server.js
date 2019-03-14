const express = require('express')
const app = express()
const mysql = require('mysql')
const path = require('path')
const port = process.env.PORT || 4000;


//WHEN USING STATIC PAGES
//app.use(express.static(__dirname + '/public'));
//Reg listen on 3k
//app.listen(3000, () => console.log('Server running on port 3000'))

//CONNECT TO REACT
// console.log that your server is up and running


var con = mysql.createConnection({
  host: 'cookabledb.cjrhtew0vlgi.us-east-2.rds.amazonaws.com',
  user: 'master',
  password: 'TdWvQM3e75bbsXvyEvbR',
  database: 'testing',
});

con.connect(function(error){
  if(!!error) {
    console.log('Error');
  }
  else{
    console.log('Connected'); 
  }
})

app.get('/', function(req, res){
    var sql = "INSERT INTO users (name, password) VALUES ('Pyae', '12345')";
    con.query(sql, function (err, result) {
      if (err){
        res.send('Error')
      }
      else{res.send("1 record inserted")};
    })
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

