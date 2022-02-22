const { getAllProducts, getProduct } = require("./controllers/productController");

const setUpRoutes = (app) => {
  app.get("/products", getAllProducts);
  app.get("/product/:id", getProduct);
};

module.exports = setUpRoutes;
