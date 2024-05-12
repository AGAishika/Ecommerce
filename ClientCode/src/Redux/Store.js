import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryReducer } from "./Reducer/CategoryReducer";
import {
  productReducer,
  productdetailsReducer,
} from "./Reducer/ProductReducer";
import { cartReducer } from "./Reducer/CartReducer";
import { userRegistrationReducer } from "./Reducer/UserReducer";
import { newOrderReducer } from "./Reducer/OrderReducer";

const reducer = combineReducers({
  cat: categoryReducer,
  pro: productReducer, // yha data api se uthkar ara hai
  pd: productdetailsReducer,
  cart: cartReducer,
  auth: userRegistrationReducer,
  orders: newOrderReducer,
});

let initializeState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];

//create store
const store = createStore(
  reducer,
  initializeState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
