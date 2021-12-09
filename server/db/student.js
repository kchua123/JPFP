const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true,
        isEmail: true
      },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/woozy-face.png"
  },
  gpa: {
      type: Sequelize.FLOAT(0.0, 4.0),
      validate: {
        notEmpty: true,
        min: 0.0,
        max: 4.0
      },
  }
});