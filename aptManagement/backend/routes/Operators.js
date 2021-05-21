const express = require("express");
const router = express.Router();
const { Operators } = require("../models");
const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const listOfOperators = await Operators.findAll();
  res.json(listOfOperators);
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Operators.create({
      name: name,
      email: email,
      password: hash,
    });
    res.json("Sucess");
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Operators.findOne({ where: { email: email } });

  if (!user) res.json({ error: "User Doesn't Exist" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });

    const accessToken = sign(
      { email: user.email, id: user.id },
      "importantsecret"
    );
    res.json(accessToken);
  });
});

module.exports = router;
