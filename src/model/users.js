const databaseConnection = require('../db/connect');
const DataTypes = require('sequelize');
const bcrypt = require('bcrypt');

let users = databaseConnection.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.INTEGER,
  createdAt: DataTypes.TIME,
  updatedAt: DataTypes.TIME
});

users.isValidPassword = async (password, passwordOnDB) => {
  return await bcrypt.compare(password, passwordOnDB);
}

module.exports = users;