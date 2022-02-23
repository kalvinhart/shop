const express = require("express");
const app = express();
require("dotenv").config();

const setUpDatabase = require("./db");
const { errorHandler } = require("./middleware/errors");
const { RouteNotFoundError } = require("./customErrors");

const PORT = process.env.PORT || 5000;

const initialiseApp = () => {
  app.use(express.urlencoded({ extended: true }));

  setUpDatabase();

  app.use("/api/products", require("./routes/productRoutes"));
  app.use("/api/categories", require("./routes/categoryRoutes"));

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
  });
};

initialiseApp();
