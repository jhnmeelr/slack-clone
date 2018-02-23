export default {
  Query: {
    getUser: (parent, args, context) => context.models.User.findOne({ where: { id: args.id } }),
    allUsers: (parent, args, context) => context.models.User.findAll(),
  },
  Mutation: {
    createUser: (parent, args, context) => context.models.User.create(args),
  },
};
