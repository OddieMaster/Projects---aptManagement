const express = require("express");
const router = express.Router();
const { Residents } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
  const listOfResidents = await Residents.findAll();
  res.json(listOfResidents);
});

router.post("/", validateToken, async (req, res) => {
  const post = req.body;
  await Residents.create(post);
  res.json(post);
});
module.exports = router;
