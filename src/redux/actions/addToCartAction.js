import { ActionType } from "../constants/actionTypes";

export const addToCart = (product) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload: product,
  };
};

export const increaseQty = (product) => {
  return {
    type: ActionType.INCREASE_QTY,
    payload: product,
  };
};

export const decreaseQty = (product) => {
  return {
    type: ActionType.DECREASE_QTY,
    payload: product,
  };
};

export const remove = (product) => {
  return {
    type: ActionType.REMOVE,
    payload: product,
  };
};
