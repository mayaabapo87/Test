const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Service = sequelize.define('services', {
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
  },
  details: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: false, 
});

module.exports = Service;
