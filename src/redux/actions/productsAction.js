import { ActionType } from "../constants/actionTypes";

export const setProduct = (products) => {
  return {
    type: ActionType.SET_PRODUCTS,
    payload: products,
  };
};
