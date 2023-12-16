import { combineReducers, createStore } from "redux";
import cartReducer from "../reducers/cartReducer";
import productReducer from "../reducers/productReducer";

const rootRedcuer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

const store = createStore(rootRedcuer);

export default store;
