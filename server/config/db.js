const mongoose = require("mongoose");

const devURI = process.env.MONGO_URI_DEV;
const prodURI = process.env.MONGO_URI_PROD;

const setUpDatabase = () => {
  mongoose.connect(process.env.NODE_ENV === "production" ? prodURI : devURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.once("open", () => {
    console.log("Database connected");
  });
};

module.exports = setUpDatabase;
