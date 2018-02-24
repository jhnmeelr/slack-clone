import bcrypt from 'bcrypt';

export default {
  Query: {
    getUser: (parent, args, context) => context.models.User.findOne({ where: { id: args.id } }),
    allUsers: (parent, args, context) => context.models.User.findAll(),
  },
  Mutation: {
    register: async (parent, { password, ...otherArgs }, context) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 12);
        await context.models.User.create({ ...otherArgs, password: hashedPassword });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
