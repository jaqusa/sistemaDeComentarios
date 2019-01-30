export default `

  type Comment{
    id:ID!
    content:String!
  }

  type Query {
    allComments: [Comment]!
  }

  type Mutation{
    createComment(content:String!):Comment!
    deleteComment(id:ID!):Comment
  }

  
`;