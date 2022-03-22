import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { productsReducer, productDetailsReducer } from "./reducers/productReducers";
import { authReducer } from "./reducers/authReducers";
import { categoryReducer } from "./reducers/categoryReducers";

const initialState = {};

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  categories: categoryReducer,
  cart: cartReducer,
  auth: authReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
