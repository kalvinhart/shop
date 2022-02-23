const express = require("express");
const app = express();
require("dotenv").config();

const setUpDatabase = require("./db");
const setUpRoutes = require("./routes");
const errorHandler = require("./middleware/errors");
const { RouteNotFoundError } = require("./customErrors");

const PORT = process.env.PORT || 5000;

const initialiseApp = () => {
  app.use(express.urlencoded({ extended: true }));

  setUpDatabase();
  setUpRoutes(app);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
  });
};

initialiseApp();
