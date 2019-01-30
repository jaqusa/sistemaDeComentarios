import {ApolloServer,gql} from 'apollo-server-express'
import typeDefs from "../graphql/schemas"
import resolvers from "../graphql/resolvers"

module.exports = app => {
 
  app.db.sequelize.sync().done(()=>{
    
    const Comments = app.db.models.Comments
    const server = new ApolloServer({ typeDefs, resolvers,context:{Comments}});
    server.applyMiddleware({ app });

    app.listen(app.get('port'), () =>
      console.log(`🚀 Server ready at http://localhost:${app.get('port')}${server.graphqlPath}`),
    )
    
  })

  
  
};