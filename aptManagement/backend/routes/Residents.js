const express = require("express");
const router = express.Router();
const { Residents } = require("../models");

router.get("/", async (req, res) => {
  const listOfResidents = await Residents.findAll()
  res.json(listOfResidents)
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Residents.create(post);
  res.json(post);
});
module.exports = router;
