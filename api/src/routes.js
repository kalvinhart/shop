const getAllProducts = require("./controllers/productController");

const setUpRoutes = (app) => {
  app.get("/products", getAllProducts);
};

module.exports = setUpRoutes;
