module.exports = (sequelize, DataTypes) => {
  const Operators = sequelize.define("Operators", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Operators;
};
