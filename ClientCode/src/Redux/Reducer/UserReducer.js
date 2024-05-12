import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERRORS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_SUCCESS,
} from "../Constants/UserConstant";

export const userRegistrationReducer = (state = { user: [] }, action) => {
  console.log(action.type);
  switch (action.type) {
    case REGISTER_USER_REQUEST:
    case LOGIN_REQUEST:
    case LOAD_USER_REQUEST:
    case LOGOUT_REQUEST:
    case UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case REGISTER_USER_SUCCESS:
    case LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case REGISTER_USER_FAIL:
    case LOGIN_FAIL:
    case LOAD_USER_FAIL:
    case UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case LOGOUT_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
