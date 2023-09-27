const { DataTypes } = require('sequelize');
const sequelize = require('../db/db_services');

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
  timestamps: false, // Disable timestamps
});

module.exports = Service;
