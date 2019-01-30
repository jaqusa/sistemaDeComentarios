export default {
  Query:{
    allComments:(parent,args,{Comments})=> Comments.findAll()
  },
  Mutation:{
    createComment:(parents,args,{Comments})=> Comments.create(args),
    deleteComment:(parents,args,{Comments})=> Comments.destroy({where:args})
  }
}
