import express from "express";

module.exports = app =>{

  //app settings
  app.set('port', process.env.PORT || 3000)

  //app middlewares
  app.use(express.json())
};