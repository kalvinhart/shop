const {
  getAllProducts,
  getProduct,
  addNewProduct,
} = require("./controllers/productController");

const setUpRoutes = (app) => {
  app.get("/products", getAllProducts);
  app.get("/product/:id", getProduct);
  app.post("/product", addNewProduct);
};

module.exports = setUpRoutes;
