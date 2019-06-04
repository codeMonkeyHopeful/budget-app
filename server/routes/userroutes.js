const express = require("express");
const router = express.Router();
const hash = require("../../utils/hashedpassword");
const { User } = require("../../db/index");

router.post("/login", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = hash(password);

  User.findOne({
    where: {
      email,
      password: hashedPassword
    }
  }).then(user => {
    if (!user) {
      return res.status(500).send("There is no user");
    }
    res.status(200).json({ id: user.id, name: user.name, email: user.email });
  });
});

router.post("/register", (req, res, next) => {
  const user = req.body;
  User.create(user)
    .then(() => {
      res.status(200).json({ id: user.id, name: user.name, email: user.email });
    })
    .catch(next);
});

router.put("/update", (req, res, next) => {
  const { id, name, email, password } = req.body;
  User.findAll({
    where: { id: id }
  })
    .then(result => {
      if (!result) {
        return res.json("There is no user to update");
      }
      User.update(
        {
          email: email,
          name: name,
          password: hash(password)
        },
        { where: { id } }
      );
    })
    .then(() => {
      res.send("Success");
    })
    .catch(next);
});

module.exports = router;
