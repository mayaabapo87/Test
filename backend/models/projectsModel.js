const { DataTypes } = require('sequelize');
const sequelize = require('../db/db_project'); 

const Project = sequelize.define('projects', {
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
  },
  shortdescription: {
    type: DataTypes.TEXT,
  },
  details: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: false, 
});

module.exports = Project;
