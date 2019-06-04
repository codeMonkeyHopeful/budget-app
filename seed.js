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
    console.log("TEST");
    return Promise.all([
      createUser("Mark", "LikeABoss", "HypeDis@gmail.com"),
      createPurchase("Monkey", 50.019),
      createPurchase("Cool Hat", 10.0)
    ]);
  })
  .then(([user, purchase, purchase2]) => {
    return Promise.all([purchase.setUser(user), purchase2.setUser(user)]);
  })
  .catch(e => {
    console.log(e);
  })
  .finally(() => {
    db.close();
  });
