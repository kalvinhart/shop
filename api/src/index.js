const express = require("express");
const app = express();
require("dotenv").config();

const setUpRoutes = require("./routes");

const PORT = process.env.PORT || 5000;

setUpRoutes(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
