import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
} from "../Constants/ProductConstant";
import axios from "axios"; // use to call api

export const getproduct = () => async (dispatch) => {
  try {
    // dispatch yha update ka work kar rha hai `
    dispatch({ type: ALL_PRODUCT_REQUEST });
    let link = "/api/getallproduct";
    const { data } = await axios.get(link);
    
    // console.log( data );
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (dispatch) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getproductdetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    let link = `/api/getoneproduct/${id}`;
    const { data } = await axios.get(link);
    // console.log(data);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,          
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message
    });
  }
};
