const setUpRoutes = (app) => {
  app.get("/products", (req, res) => {
    res.send("get products");
  });
};

module.exports = setUpRoutes;
