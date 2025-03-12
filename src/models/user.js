const { DataTypes } = require("sequelize");

const modelDefine = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "usuarios",
      timestamps: false,
    }
  );
  return User;
};

module.exports = modelDefine;
