import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productsReducer, selectedProductReducer } from "./productsReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductReducer,
  cartItems: cartReducer,
});

export default reducers;
