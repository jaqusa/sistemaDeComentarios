export default {
  Query:{
    allComments:(parent,args,{Comments})=> Comments.findAll()
  },
  Mutation:{
    createComment:(parents,args,{Comments})=>{ return Comments.create(args)},
    deleteComment:(parents,args,{Comments})=>{ return Comments.destroy({where:args})}
  }
}
