import {
  GET_PRODUCTS,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE
} from "../actions/actionTypes";

const initialState = {
  allproducts: [],
  creatingProduct: false,
  newProduct: null,
  error: null,
  productDetails: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allproducts: [...action.payload],
      };

    case CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        creatingProduct: true,
        error: null,
      };

    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        creatingProduct: false,
        newProduct: action.payload,
      };

    case CREATE_PRODUCT_FAILURE:
      return {
        ...state,
        creatingProduct: false,
        error: action.payload,
      };

    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        productDetails: action.payload,
        error: null,
      };

    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        productDetails: null,
        error: action.payload,
      };

    default:
      return state;
  }
}
