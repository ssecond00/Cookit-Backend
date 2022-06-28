"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("receta", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      date: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dificultad: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      estrellas: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      categoria: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pasos_a_seguir: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("receta");
  },
};
