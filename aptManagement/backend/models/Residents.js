module.exports = (sequelize, DataTypes) => {
  const Residents = sequelize.define("Residents", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bdate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Residents;
};
