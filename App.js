import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/configStore/store';

import {
  useFonts,
  FiraSans_400Regular,
  FiraSans_700Bold,
} from '@expo-google-fonts/fira-sans';
import AppNavigator from './navigation/AppNavigator';
import AppLoading from 'expo-app-loading';

export default function App() {
  const { store, persistor } = configureStore();

  const [loaded] = useFonts({
    FiraSans_400Regular,
    FiraSans_700Bold,
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
