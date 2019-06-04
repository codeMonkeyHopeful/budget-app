const db = require("./db");
const User = require("./User");
const Purchase = require("./Purchase");

Purchase.belongsTo(User);

module.exports = { db, User, Purchase };
