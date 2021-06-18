const databaseConnection = require('../db/connect');
const DataTypes = require('sequelize');

let gallery = databaseConnection.define('gallery', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  createdBy: DataTypes.INTEGER,
  imageName: DataTypes.STRING,
  url: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
});

module.exports = gallery;