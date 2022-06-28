"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class receta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  receta.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      date: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      user: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dificultad: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      estrellas: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      categoria: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pasos_a_seguir: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: "receta",
    }
  );
  return receta;
};
