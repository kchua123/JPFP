const Sequelize = require("sequelize");
const db = require("./database");

const Campus = db.define("campus", {
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
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.colourbox.com/preview/7775452-magic-book.jpg"
  },
});

module.exports = Campus;
