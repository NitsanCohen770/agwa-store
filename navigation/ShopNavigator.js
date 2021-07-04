import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';

const ProductsStackNavigator = createStackNavigator();

const defaultNavigationOptions = {
  headerTitle: 'Agwa-Farm Online Store',
  headerLeft: () => <Icon name='ios-book' color='#4F8EF7' />,
  headerRight: () => <Icon name='ios-book' color='#4F8EF7' />,
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: 'white',
};

const ProductsNavigator = props => {
  return (
    <NavigationContainer>
      <ProductsStackNavigator.Navigator
        screenOptions={defaultNavigationOptions}>
        <ProductsStackNavigator.Screen
          name='ProductsOverview'
          component={ProductsOverviewScreen}
        />
      </ProductsStackNavigator.Navigator>
    </NavigationContainer>
  );
};

// const ProductsNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen,
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
//       },
//       headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
//     },
//   }
// );

export default ProductsNavigator;
