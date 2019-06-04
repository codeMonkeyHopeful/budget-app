const Sequelize = require("sequelize");
const db = require("./db");

const User = db.define("user", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { min: 6 }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true }
  }
});

module.exports = User;
