module.exports = app => {
 
  app.listen(app.get('port'), () =>
  console.log(`🚀 Server ready at http://localhost:${app.get('port')}`),
  )
  
};