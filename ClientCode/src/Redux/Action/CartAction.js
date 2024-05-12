import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../Constants/CartConstant";

import axios from "axios";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  let link = `/api/getoneproduct/${id}`;

  const { data } = await axios.get(link);
  // console.log(data);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.Productdata._id,
      name: data.Productdata.name,
      price: data.Productdata.price,
      image: data.Productdata.image.url,
      stock: data.Productdata.stock,
      quantity,
    },
  });
  // now we need to set dispatch data into localStorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems)); //special functionality of localStorage is that it stores data in 1. string format 2. key and value
};

export const removeCartItems = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });
  // now we need to set dispatch data into localStorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems)); //special functionality of localStorage is that it stores data in 1. string format 2. key and value
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  console.log(data);
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
