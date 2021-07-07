import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductOverviewScreenOptions } from '../screens/shop/ProductOverviewScreen';
import { ProductDetailScreenOptions } from '../screens/shop/ProductDetailScreen';
import { CartScreenOptions } from '../screens/shop/CartScreen';
import ProductsOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductsDetailScreen from '../screens/shop/ProductDetailScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/Colors';
import { differenceWith } from 'lodash';
import { useAssets } from 'expo-asset';
import { StyleSheet, Image, FlatList } from 'react-native';
import CartScreen from '../screens/shop/CartScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';

const ProductsStackNavigator = createStackNavigator();

const defaultNavigationOptions = {
  headerTitle: 'Online Store',
  headerTitleStyle: {
    fontFamily: 'FiraSans_700Bold',
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
        component={CartScreen}
        options={CartScreenOptions}
      />
    </ProductsStackNavigator.Navigator>
  );
};

const ShopDrawerNavigator = createDrawerNavigator();

export const ShopNavigator = () => {
  const categories = useSelector(state => state.products.categories);
  const allProducts = useSelector(state => state.products.categories);
  console.log(categories);
  return (
    <ShopDrawerNavigator.Navigator>
      <ShopDrawerNavigator.Screen
        name='All products'
        component={ProductsNavigator}
        options={{
          drawerIcon: props => (
            <Icon name='barchart' size={23} color={props.color} />
          ),
        }}
      />
      {categories &&
        categories.map(category => (
          <ShopDrawerNavigator.Screen key={category.id} name={category.name}>
            {props => (
              <ProductsOverviewScreen
                {...props}
                categoryProducts={category.plants}
              />
            )}
          </ShopDrawerNavigator.Screen>
        ))}
    </ShopDrawerNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: { marginRight: 10 },
});
export default ProductsNavigator;
