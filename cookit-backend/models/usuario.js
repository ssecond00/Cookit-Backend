'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuario.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username:  {
      allowNull: false,
      type: DataTypes.STRING,
    },
    nombre:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    phone_number:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    email:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    password:{
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
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};