import { tryLogin } from '../auth';
import formatErrors from '../formatErrors';

export default {
  Query: {
    getUser: (parent, args, context) => context.models.User.findOne({ where: { id: args.id } }),
    allUsers: (parent, args, context) => context.models.User.findAll(),
  },
  Mutation: {
    login: (parent, args, { models, SECRET, SECRET2 }) =>
      tryLogin(args.email, args.password, models, SECRET, SECRET2),
    register: async (parent, args, context) => {
      try {
        const user = await context.models.User.create(args);
        return {
          ok: true,
          user,
        };
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err, context.models),
        };
      }
    },
  },
};
