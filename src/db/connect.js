let Sequelize = require('sequelize');

let mysqlConnection = new Sequelize(process.env.DB, process.env.USER, process.env.PASS, {
  host: process.env.HOST,
  port: 3306,
  dialect: 'mysql',
  define: {
    timestamps: true,
    freezeTableName: true,
  }
});

mysqlConnection.authenticate()
  .then(() => {
    console.log('Connection Established Successfully');
  })
  .catch((err) => {
    console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
  })

module.exports = mysqlConnection;