module.exports = (sequelize, DataTypes) => {
    const Apartments = sequelize.define("Apartments", {
       
        block: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        apartment: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    return Apartments;
}