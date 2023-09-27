
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres', 
  host: 'localhost',
  database: 'apollo',
  username: 'postgres', 
  password: 'qwerty12731.', 
  port: 5432,
});

module.exports = sequelize;
