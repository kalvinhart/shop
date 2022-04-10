require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();
const passport = require("passport");
const jwtStrategy = require("./config/passport");

const setUpDatabase = require("./config/db");

const { errorHandler } = require("./middleware/errors");

const PORT = process.env.PORT || 5000;

const initialiseApp = () => {
  app.use(cors());

  setUpDatabase();

  app.use(passport.initialize());
  passport.use(jwtStrategy);

  app.use("/api/payment", require("./routes/paymentRoutes"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/products", require("./routes/productRoutes"));
  app.use("/api/categories", require("./routes/categoryRoutes"));
  app.use("/api/users", require("./routes/userRoutes"));

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "./client/build")));

    app.get("*", function (req, res) {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
  });
};

initialiseApp();
