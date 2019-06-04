const { User, db, Purchase } = require("./db/index.js");

const createUser = (name, password, email) => {
  return User.create({ name, password, email });
};

const createPurchase = (name, cost) => {
  return Purchase.create({ name, cost });
};

db.sync({ force: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .then(() => {
    return Promise.all([
      createUser("Mark", "LikeABoss", "HypeDis@gmail.com"),
      createPurchase("Monkey", 50.019)
    ]);
  })
  .catch(e => {
    console.log(e);
  })
  .finally(() => {
    db.close();
  });
