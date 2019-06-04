const express = require("express");
const router = express.Router();
const { Purchase, User } = require("../../db/index");

router.get("/", (req, res, next) => {
  Purchase.findAll({}).then(purchases => {
    res.json(purchases);
  });
});

router.get("/:id", (req, res, next) => {
  Purchase.findAll({
    where: { userId: req.params.id }
  }).then(result => {
    res.json(result);
  });
});

module.exports = router;
