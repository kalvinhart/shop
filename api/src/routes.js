const {
  getAllProducts,
  getProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
} = require("./controllers/productController");
const { RouteNotFoundError } = require("./customErrors");

const setUpRoutes = (app) => {
  app.get("/products", getAllProducts);
  app.get("/product/:id", getProduct);
  app.post("/product", addNewProduct);
  app.patch("/product/:id", updateProduct);
  app.delete("/product/:id", deleteProduct);
  app.get("*", (req, res, next) => next(new RouteNotFoundError(req.originalUrl)));
};

module.exports = setUpRoutes;
