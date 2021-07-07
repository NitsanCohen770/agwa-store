import * as productsActionTypes from '../actions/productsActionTypes';

const initialState = {
  availableProducts: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productsActionTypes.SET_PRODUCTS:
      return {
        availableProducts: action.products,
      };
    case productsActionTypes.SET_CATAGORIES:
      console.log(action.categories);
      return { ...state, categories: action.categories };
  }
  return state;
};
