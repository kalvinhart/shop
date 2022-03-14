const mongoose = require("mongoose");

const setUpDatabase = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.once("open", () => {
    console.log("Database connected");
  });
};

module.exports = setUpDatabase;
