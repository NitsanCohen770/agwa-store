import cartReducer from './cart';
import productsReducer from './products';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
