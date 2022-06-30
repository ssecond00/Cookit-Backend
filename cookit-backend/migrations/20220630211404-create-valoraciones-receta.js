'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('valoraciones_receta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_receta: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      valoracion: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('valoraciones_receta');
  }
};