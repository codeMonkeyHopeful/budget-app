const Sequelize = require("sequelize");
const db = require("./db");
const hash = require("../utils/hashedpassword");

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
    validate: { len: [6, 30] }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true }
  }
});

User.beforeCreate((user, options) => {
  user.password = hash(user.password);
});

module.exports = User;
