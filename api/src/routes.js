const {
  getAllProducts,
  getProduct,
  addNewProduct,
  updateProduct,
} = require("./controllers/productController");

const setUpRoutes = (app) => {
  app.get("/products", getAllProducts);
  app.get("/product/:id", getProduct);
  app.post("/product", addNewProduct);
  app.patch("/product/:id", updateProduct);
};

module.exports = setUpRoutes;
