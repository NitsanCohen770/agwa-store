import * as cartActionTypes from '../actions/cartActionTypes';
import CartItem from '../../models/cart-item';

const initialState = {
  currentDevice: 'deviceA',
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
            totalAmount:
              state[chosenDevice].totalAmount +
              productPrice * quantityToBeAdded,
          },
        };
      } else {
        const newCartItem = new CartItem(
          quantityToBeAdded,
          productPrice,
          productName,
          productPrice * quantityToBeAdded
        );
        return {
          ...state,
          [chosenDevice]: {
            ...state[chosenDevice],
            items: {
              ...state[chosenDevice].items,
              [addedProduct.id]: newCartItem,
            },
            totalAmount:
              state[chosenDevice].totalAmount +
              productPrice * quantityToBeAdded,
          },
        };
      }
    case cartActionTypes.DECREMENT_FROM_CART:
      const productId = action.product;
      const selectedDevice = action.device;
      const selectedCartItem = state[selectedDevice].items[productId];

      const currentQuantity = selectedCartItem.quantity;
      let updatedCartItems;
      if (currentQuantity > 1) {
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.price,
          selectedCartItem.name,
          selectedCartItem.sum - selectedCartItem.price
        );
        updatedCartItems = {
          ...state[selectedDevice].items,
          [productId]: updatedCartItem,
        };
      } else {
        updatedCartItems = { ...state[selectedDevice].items };
        delete updatedCartItems[productId];
      }
      return {
        ...state,
        [selectedDevice]: {
          ...state[selectedDevice],
          items: updatedCartItems,
          totalAmount:
            state[selectedDevice].totalAmount - selectedCartItem.price,
        },
      };
    case cartActionTypes.CHOOSE_DEVICE:
      return {
        ...state,
        currentDevice: action.selectedDevice,
      };
  }
  return state;
};
