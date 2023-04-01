import { ActionType } from "../constants/actionTypes";

export const setProductElectronics = (products) => {
  return {
    type: ActionType.SET_PRODUCTS_ELECTRONICS,
    payload: products,
  };
};

export const setProductsJewelery = (products) => {
  return {
    type: ActionType.SET_PRODUCTS_JEWELERY,
    payload: products,
  };
};

export const setProductsMensClothing = (products) => {
  return {
    type: ActionType.SET_PRODUCTS_MENS_CLOTHING,
    payload: products,
  };
};

export const setProductsWomensClothing = (products) => {
  return {
    type: ActionType.SET_PRODUCTS_WOMENS_CLOTHING,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionType.REMOVE_SELECTED_PRODUCT,
    payload: {},
  };
};
