const express = require("express");
const app = express();
require("dotenv").config();

const setUpDatabase = require("./db");
const setUpRoutes = require("./routes");

const PORT = process.env.PORT || 5000;

setUpDatabase();
setUpRoutes(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
