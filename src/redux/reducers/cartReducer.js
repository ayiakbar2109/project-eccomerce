import { ActionType } from "../constants/actionTypes";

const initialState = [];

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.ADD_TO_CART:
      const tempState = state.filter((item) => payload.id === item.id);
      if (tempState.length > 0) {
        return state;
      } else {
        return [...state, payload];
      }
    case ActionType.INCREASE_QTY:
      const increaseQty = state.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return increaseQty;
    case ActionType.DECREASE_QTY:
      const decreaseQty = state.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return decreaseQty;
    case ActionType.REMOVE:
      const remove = state.filter((item) => payload.id !== item.id);
      return remove;

    default:
      return state;
  }
};
