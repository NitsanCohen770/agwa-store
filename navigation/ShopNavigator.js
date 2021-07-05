import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductOverviewScreenOptions } from '../screens/shop/ProductOverviewScreen';
import { ProductDetailScreenOptions } from '../screens/shop/ProductDetailScreen';
import ProductsOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductsDetailScreen from '../screens/shop/ProductDetailScreen';
import AppLoading from 'expo-app-loading';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/Colors';
import { useAssets } from 'expo-asset';
import { StyleSheet, Image } from 'react-native';

const ProductsStackNavigator = createStackNavigator();

const defaultNavigationOptions = {
  headerTitle: 'Online Store',
  headerLeft: () => (
    <Image
      style={{ width: 40, height: 40, marginLeft: 10 }}
      source={require('../assets/agwa_logo@3x.png')}
    />
  ),
  headerTitleStyle: {
    fontFamily: 'fira-sans-bold',
  },
  headerRight: () => (
    <Icon
      name='shoppingcart'
      color={Colors.blue}
      size={30}
      style={styles.icon}
    />
  ),
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: Colors.fontColor,
};

export const ProductsNavigator = props => {
  const [assets] = useAssets(require('../assets/agwa_logo@3x.png'));
  if (!assets) {
    return <AppLoading />;
  }
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
      <ProductsStackNavigator.Screen
        name='ProductsOverview'
        component={ProductsOverviewScreen}
        options={ProductOverviewScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name='ProductDetailScreen'
        component={ProductsDetailScreen}
        options={ProductDetailScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name='Cart'
        component={ProductsDetailScreen}
      />
    </ProductsStackNavigator.Navigator>
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
const styles = StyleSheet.create({
  icon: { marginRight: 10 },
  IconTree: { marginLeft: 10 },
});
export default ProductsNavigator;
