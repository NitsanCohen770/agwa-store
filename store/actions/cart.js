import products from '../reducers/products';
import * as cartActionTypes from './cartActionTypes';

export const addToCart = (product, device, quantity) => {
  return { type: cartActionTypes.ADD_TO_CART, product, device, quantity };
};
