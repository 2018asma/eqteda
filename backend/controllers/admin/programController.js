const { Program } = require("../../models");


// Create Program
exports.createProgram = (req, res) => {
  const program = { ...req.body };
  program.image = req.file.path;

  Program.create(program)
    .then((program) => {
      res.status(201).json(program);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// Delete Program
exports.destroyProgram = (req, res)=>{
  const id = req.params.id;
  Program.destroy({
    where:{
      id
    }
  }).then(state =>{
    if(state){
      return res.status(204).json({msg: 'Deleted Successfully'})
    }
   return res.status(404).json({msg: 'Not found'})
  }).catch(err=>{
    return res.status(500).send(err)
  })
}

// Update Program 
exports.updateProgram = (req, res)=>{
  const program = req.body;
  if(req.file){
    req.body.image = req.file.path
    console.log(req.file)
  }
  Program.update(program,{
    where:{
      id: req.params.id
    }
  }).then(state =>{
    if(state[0]){
      return res.status(204).json({msg: 'Updated Successfully'})
    }
    return res.status(404).json({msg: 'Not Found'})
  }).catch(err=>{
    return res.status(500).send(err)
  })
}

