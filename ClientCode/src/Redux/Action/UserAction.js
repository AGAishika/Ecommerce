import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERRORS,
  LOAD_USER_REQUEST,
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_FAIL
} from "../Constants/UserConstant";

import axios from "axios";

export const createUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    let link = "/api/userinsert";

    const { data } = await axios.post(link, formData);
    // console.log(data);

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data,
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    let link = "/api/userlogin";

    const { data } = await axios.post(link, { email, password });
    console.log(data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.admin,
    });
    // dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    let link = "/api/getuserdetail";

    const { data } = await axios.get(link);
    // console.log(data);

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.admin,
    });
  } catch (err) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: err.response.data.message,
    });
  }
};
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST });
    await axios.get("/api/logout");
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: err.response.data.message,
    });
  }
};

// update profile
export const updateUserProfile = (formData, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    let link = "/api/updateProfile";

    const { data } = await axios.post(link, formData);
    // console.log(data);

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    });
    dispatch(loadUser())
  } catch (err) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: err.response.data.message,
    });
  }
};

// FOR CLEARING ERRORS
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};  
