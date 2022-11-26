console.log("Hola desde el index :D");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const app_routes = require("./src/routes/index");
require("dotenv").config();
app.listen(port, () => console.log(`Listening the port ${port}`));

mongoose
  .connect(process.env.CONNECTION_MONGODB)
  .then(() => console.log("Sucess connection with mongo"))
  .catch((err) => console.error(`Failed connection with mongo ${err}`));

app.use(express.json());
app_routes(app);
