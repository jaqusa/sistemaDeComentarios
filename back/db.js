import Sequelize from 'sequelize'

let db = null

module.exports= app =>{

  const config = app.libs.config

  if(!db){
    const sequelize = new Sequelize(
      config.development
    )
    
    db = {
      sequelize,
      Sequelize,
      models:{}
    }

   const model = sequelize.import('./models/Comments.js')
   db.models[model.name] = model
   
   

  }

  return db

}