const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../../config/sequelize");

const Product = sequelize.define('Product', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  image_url: {
    type: DataTypes.TEXT
  }
}, {
  // Other model options go here
});

module.exports = Product;