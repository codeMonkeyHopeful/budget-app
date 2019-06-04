const Sequalize = require("sequelize");
const db = new Sequalize("postgres://localhost:5432/budgetapp", {
  logging: false
});

module.exports = db;
