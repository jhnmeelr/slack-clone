export default {
  Mutation: {
    createTeam: async (parent, args, context) => {
      try {
        await context.models.Team.create({ ...args, owner: context.user.id });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
