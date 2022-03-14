const mongoose = require("mongoose");

const connection = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((m) => m.connection.getClient());

mongoose.connection.once("open", () => {
  console.log("Database connected");
});

module.exports = connection;
