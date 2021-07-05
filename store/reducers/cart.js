import * as cartActionTypes from '../actions/cartActionTypes';
import CartItem from '../../models/cart-item';

const initialState = {
  deviceA: {
    items: {},
    totalAmount: 0,
  },
  deviceB: {
    items: {},
    totalAmount: 0,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      const chosenDevice = action.device;
      const addedProduct = action.product;
      const quantityToBeAdded = action.quantity;
      const productPrice = addedProduct.price;
      const productName = addedProduct.name;

      if (state[chosenDevice].items[addedProduct.id]) {
        const updatedCartItem = new CartItem(
          state[chosenDevice].items[addedProduct.id].quantity +
            quantityToBeAdded,
          productPrice,
          productName,
          state[chosenDevice].items[addedProduct.id].sum +
            productPrice * quantityToBeAdded
        );
        return {
          ...state,
          [chosenDevice]: {
            ...state[chosenDevice],
            items: {
              ...state[chosenDevice].items,
              [addedProduct.id]: updatedCartItem,
            },
          },
          totalAmount: state.totalAmount + productPrice * quantityToBeAdded,
        };
      } else {
        const newCartItem = new CartItem(
          1,
          productPrice,
          productName,
          productPrice
        );
        return {
          ...state,
          [chosenDevice]: {
            ...state[chosenDevice],
            items: {
              ...state[chosenDevice].items,
              [addedProduct.id]: newCartItem,
            },
          },
          totalAmount: state.totalAmount + productPrice * quantityToBeAdded,
        };
      }
  }
  return state;
};
