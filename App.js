import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  useFonts,
  FiraSans_400Regular,
  FiraSans_700Bold,
} from '@expo-google-fonts/fira-sans';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import AppNavigator from './navigation/AppNavigator';
import AppLoading from 'expo-app-loading';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default function App() {
  const [loaded] = useFonts({
    FiraSans_400Regular,
    FiraSans_700Bold,
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
