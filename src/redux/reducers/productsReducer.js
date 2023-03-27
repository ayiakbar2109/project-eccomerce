import { ActionType } from "../constants/actionTypes";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
