const {
  getAllProducts,
  getProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
} = require("./controllers/productController");

const setUpRoutes = (app) => {
  app.get("/products", getAllProducts);
  app.get("/product/:id", getProduct);
  app.post("/product", addNewProduct);
  app.patch("/product/:id", updateProduct);
  app.delete("/product/:id", deleteProduct);
};

module.exports = setUpRoutes;
