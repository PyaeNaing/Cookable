const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 4000;

//WHEN USING STATIC PAGES
//app.use(express.static(__dirname + '/public'));
//Reg listen on 3k
//app.listen(3000, () => console.log('Server running on port 3000'))


//CONNECT TO REACT
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

