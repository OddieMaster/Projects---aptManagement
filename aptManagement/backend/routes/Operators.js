const express = require("express");
const router = express.Router();
const { Operators } = require("../models");

router.get("/", async (req, res) => {
  const listOfOperators = await Operators.findAll()
  res.json(listOfOperators)
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Operators.create(post);
  res.json(post);
});
module.exports = router;
