const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const login = require("./routes/userroutes");
const purchases = require("./routes/purchasesrouter");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//STUDY THIS CONNECTION FOR THE STATIC PATH
app.use(express.static(path.join(__dirname, "..", "/client/public")));

app.get("/", (req, res, next) => {
  res.sendFile("./index.html");
});

app.use("/users", login);
app.use("/purchases", purchases);

module.exports = app;
