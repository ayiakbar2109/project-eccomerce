import { ActionType } from "../constants/actionTypes";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS_ELECTRONICS:
      return { ...state, products: payload };
    case ActionType.SET_PRODUCTS_JEWELERY:
      return { ...state, products: payload };
    case ActionType.SET_PRODUCTS_MENS_CLOTHING:
      return { ...state, products: payload };
    case ActionType.SET_PRODUCTS_WOMENS_CLOTHING:
      return { ...state, products: payload };
    default:
      return state;
  }
};
