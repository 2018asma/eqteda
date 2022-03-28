const User = require('../models/User')

const bcrypt = require('bcrypt');

exports.signup = async (req, res)=>{
    const hashedPassword  = await bcrypt.hash(req.body.password, 10)
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    }).then(user=>{
      if(user){
       return res.json(user)
      }
     return res.send('failed')
    }).catch(err=>{
      res.send(err)
    })
}