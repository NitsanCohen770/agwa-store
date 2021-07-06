import PRODUCTS from '../../data/data';
import { SET_PRODUCTS } from '../actions/cartActionTypes';

const initialState = {
  availableProducts: PRODUCTS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        availableProducts: action.products,
      };
  }
  return state;
};
