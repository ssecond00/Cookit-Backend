'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imagen_receta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  imagen_receta.init({
    id_receta: DataTypes.INTEGER,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'imagen_receta',
  });
  return imagen_receta;
};