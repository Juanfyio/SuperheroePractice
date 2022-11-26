const mongoose = require("mongoose");
const user_schema = mongoose.Schema({
  heroname: { type: String, require: true },
  realname: { type: String, require: true },
  superpowers: { type: Array, require: true },
  universe: {type: String, require: true},
});

module.exports = mongoose.model("superheroes", user_schema);