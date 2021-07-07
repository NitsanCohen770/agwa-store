import { SET_PRODUCTS } from '../actions/cartActionTypes';

const initialState = {
  availableProducts: null,
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
