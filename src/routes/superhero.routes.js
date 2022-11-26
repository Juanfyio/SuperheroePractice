const express = require("express");
const userSchema = require("../models/superhero.model");
const router = express.Router();

router.post("/hero", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/hero", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/hero/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.delete("/hero/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put("/hero/:id", (req, res) => {
  const { id } = req.params;
  const { heroname, realname, superpowers, universe } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { heroname, realname, superpowers, universe } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;