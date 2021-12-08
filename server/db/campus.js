const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  address: {
    type: Sequelize.STRING,
    validate: {
        notEmpty: true,
      },
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://st.depositphotos.com/1064024/3289/i/600/depositphotos_32891271-stock-photo-mixed-colorful-fruit-bonbon.jpg"
  }
});