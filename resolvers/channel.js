export default {
  Mutation: {
    createChannel: async (parent, args, context) => {
      try {
        await context.models.Channel.create(args);
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
