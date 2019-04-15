const User = require('../moudules/User');
const processor = require('../controllers/processor');

exports.createUser = function (req, res) {

        User.findOrCreate({
            where: {
            username: req.body.username,
            password: req.body.password,
            emailAddress: req.body.emailAddress}})
        .then(([user, created]) => {
            console.log(created);
            res.send(created);
          })
          .catch(err => {
           res.send('Error');
           console.log(err)})
        },

exports.login = function(req, res){

    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
          }
    }).then(result => {
        if(result != null){
            res.send(processor.hash(req.body.username,req.body.password));
        }
        else{
            res.send('false');
        }
    }).catch(err => res.send('Error'))

}