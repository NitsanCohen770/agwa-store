import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductOverviewScreenOptions } from '../screens/shop/ProductOverviewScreen';
import { ProductDetailScreenOptions } from '../screens/shop/ProductDetailScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CartScreenOptions } from '../screens/shop/CartScreen';
import ProductsOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductsDetailScreen from '../screens/shop/ProductDetailScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/Colors';
import CartHeaderButton from '../components/UI/HeaderButton';
import { StyleSheet } from 'react-native';
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
  return (
    <ShopDrawerNavigator.Navigator>
      <ShopDrawerNavigator.Screen
        name='All products'
        component={ProductsNavigator}
        options={ProductOverviewScreenOptions}
      />
      {categories &&
        categories.map(category => (
          <ShopDrawerNavigator.Screen
            options={{
              headerShown: true,
              headerTitleStyle: styles.headerTitle,
              headerRight: navData => (
                <HeaderButtons HeaderButtonComponent={CartHeaderButton}>
                  <Item
                    color={'blue'}
                    title='Cart'
                    iconName='md-cart'
                    onPress={() => {
                      navData.navigation.navigate('Cart');
                    }}
                  />
                </HeaderButtons>
              ),
            }}
            key={category.id}
            name={category.name}>
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
  headerTitle: { color: Colors.lightGreen },
});
export default ProductsNavigator;
