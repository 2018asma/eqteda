const User = require('../../models/User')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


exports.signup = async (req, res)=>{
    const hashedPassword  = await bcrypt.hash(req.body.password, 10)
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    }).then(user=>{
      if(user){
       return res.status(201).json({msg: 'User created successfully'})
      }
    }).catch(err=>{
      return res.status(500).send(err)
    })
}


exports.signin = (req, res, next) => {
  User.findOne({
    raw: true,
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      try{
        if (!user) {
          throw new Error('خطأ في اسم المستخدم أو كلمة المرور')
        }
        const isValid = bcrypt.compareSync(req.body.password, user.password);
  
        if (!isValid) {
          throw new Error('خطأ في اسم المستخدم أو كلمة المرور')
        }
  
        const payload = {
          id: user.id,
          email: user.email,
          isAdmin: user.is_admin,
        };
  
        const accessToken = jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, { expiresIn: process.env.ACCESS_TOKEN_EXP });
        User.update({token: accessToken},{
          where:{
            id: user.id
          }
        })
        return res.cookie('access_token', accessToken,{
          httpOnly: false,
          secure: false, //work on https only
          sameSite: 'lax',
          maxAge:  10000000
        }).status(200).json({
          accessToken: `${accessToken}`,
        });

      }catch(err){
        res.status(400).send(err.message)
      }
    })

    .catch((err) => {
      res.status(500).send(err);
    });
}