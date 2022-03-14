const Joi = require('joi')


 exports.validateInput = (sechema)=>{
    return (req, res, next)=>{
        const { error } = sechema.validate(req.body)
        const valid = error == null;

        if(valid){
            res.send(valid)
        }else{
            res.send(valid)
        }
    }
}

