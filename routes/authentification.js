let User = require('../model/user');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

// création d'un utilisateur POST
function register(req,res){
    var hashedPassword = bcrypt.hashSync(req.body.password, 8); 
    User.create({
      name : req.body.name,
      password : hashedPassword,
      role : req.body.role
    }, (err, user) => {
      if (err) {console.log(err)
        return res.status(500).send("There was a problem registering the user.")}
      // create a token
      var token = jwt.sign({ id: user._id }, "secret", {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
    });     
}

// authentification POST
function login(req,res){
    User.findOne({ name: req.body.name }, (err, user) => {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        
        let token = jwt.sign({ id: user._id }, "secret", { expiresIn: 86400 // expires in 24 hours
         });
        
        res.status(200).send({ auth: true, token: token });
      });
}

module.exports = { register, login };