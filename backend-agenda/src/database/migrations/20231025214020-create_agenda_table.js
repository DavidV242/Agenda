'use strict';

const { AGENDA_TABLE } = require ('../models/agenda.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable(AGENDA_TABLE, {
      id:{
        type:Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date:{
        type:Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    startTime:{
        type:Sequelize.DataTypes.TIME,
        allowNull: false,
    },
    endTime:{
        type:Sequelize.DataTypes.TIME,
        allowNull: false
    },
    user:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    place:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    },
    status:{
        type:Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }

    });
  
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable(AGENDA_TABLE);

  }
};
