
const { Sequelize } = require('sequelize');

// Create a Sequelize instance with the 'postgres' dialect
const sequelize = new Sequelize({
  dialect: 'postgres', // Specify the database dialect
  host: 'localhost',
  database: 'apollo',
  username: 'postgres', // Add your username here
  password: 'qwerty12731.', // Add your password here
  port: 5432,
});

module.exports = sequelize;
