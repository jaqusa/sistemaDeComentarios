module.exports = (sequelize, DataType) =>{

  return  sequelize.define('Comments',{
    id:{
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content:{
      type:DataType.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }

    }

  } )


}