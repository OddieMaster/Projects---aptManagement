module.exports = (sequelize, DataTypes) => {
  const Residents = sequelize.define("Residents", {
    resident: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bdate: {
      type: DataTypes.DATEONLY,
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
