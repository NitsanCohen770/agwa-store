import * as cartActionTypes from './cartActionTypes';

export const addToCart = (product, quantity, device) => {
  return { type: cartActionTypes.ADD_TO_CART, product, quantity, device };
};
