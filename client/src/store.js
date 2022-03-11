import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { getCartReducer } from "./reducers/cartReducers";
import { getProductsReducer, getProductDetailsReducer } from "./reducers/productReducers";
import { registerUserReducer } from "./reducers/userReducers";

const initialState = {};

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getCart: getCartReducer,
  registerUser: registerUserReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
