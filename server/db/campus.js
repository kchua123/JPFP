const Sequelize = require('sequelize');
const db = require('./database');

 const Campus = db.define('campus', {
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
    defaultValue: "https://media.istockphoto.com/photos/path-through-sunlit-forest-picture-id1205214235?k=20&m=1205214235&s=612x612&w=0&h=TUNxmXOyHZ67rtPr8u9kmpn5lQAp9E-oMA2LfEshiu0="
  }
});

module.exports = Campus