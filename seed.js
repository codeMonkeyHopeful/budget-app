const { User, db } = require("./db/index.js");

db.sync({ force: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(e => {
    console.log(e);
  })
  .finally(() => {
    db.close();
  });
