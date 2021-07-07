import * as cartActionTypes from './cartActionTypes';

export const addToCart = (product, quantity, device) => {
  return { type: cartActionTypes.ADD_TO_CART, product, quantity, device };
};

export const decrementFromCart = (product, device) => {
  return { type: cartActionTypes.DECREMENT_FROM_CART, product, device };
};

export const chooseDevice = selectedDevice => {
  return { type: cartActionTypes.CHOOSE_DEVICE, selectedDevice };
};
