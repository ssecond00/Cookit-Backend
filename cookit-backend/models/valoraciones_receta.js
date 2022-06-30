"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class valoraciones_receta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  valoraciones_receta.init(
    {
      id_receta: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      valoracion: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "valoraciones_receta",
    }
  );
  return valoraciones_receta;
};
