module.exports = app =>{
   
  const Comments = app.db.models.Comments

  app.route('/')
    .get((req,res)=>{
      Comments.findAll({})
        .then(response => { 
          res.json(response)
        })
        .catch(error => { res.status(412).json({msg: error.message})})
    })
    .post((req,res)=> {
      Comments.create(req.body)
      .then(response => res.status(201).json(response))
      .catch(error => { res.status(500).json({msg: error.message})})
    })
}