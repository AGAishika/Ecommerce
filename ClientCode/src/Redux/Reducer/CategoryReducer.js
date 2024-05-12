import {
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,
  CLEAR_ERRORS,
} from "../Constants/CategoryConstant";

// now making a new reducer
export const categoryReducer = (state = { categoires: [] }, action) => {
  switch (action.type) {
    case ALL_CATEGORY_REQUEST:
      return {
        loading: true,
        categoires: [],
      };
    case ALL_CATEGORY_SUCCESS:
      return {
        loading: false,
        categoires: action.payload.category,
      };
    case ALL_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// reducer take two parameter 1. initial state 2. Action
