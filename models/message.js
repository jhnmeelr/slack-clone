export default (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    name: DataTypes.STRING,
  });

  Message.associate = (models) => {
    // 1:M
    models.Message.belongsTo(models.Channel, {
      foreignKey: 'channelId',
    });
    models.Message.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };

  return Message;
};
