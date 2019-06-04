const app = require("./server");
const { db } = require("../db/index.js");
const PORT = 8080;

db.sync().then(() => {
  console.log("synced");
  app.listen(PORT, () => {
    console.log("We are listening");
  });
});
