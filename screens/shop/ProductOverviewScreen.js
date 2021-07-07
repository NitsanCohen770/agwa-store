import React, { useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductItem from '../../components/shop/ProductsItem';
import * as cartActions from '../../store/actions/';
import * as productActions from '../../store/actions/';
import CartHeaderButton from '../../components/UI/HeaderButton';
import ChooseDevicePopup from '../../components/UI/ChooseDevicePopup';
import { useState } from 'react';

const ProductsOverviewScreen = ({ navigation, categoryProducts }) => {
  let products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();
  if (categoryProducts) {
    products = products.filter(planet1 => {
      return categoryProducts.some(planet2 => {
        return planet1.id === planet2.id;
      });
    });
  }

  useEffect(() => {
    if (categoryProducts) {
      return;
    }
    dispatch(productActions.fetchProducts());
    return () => {};
  }, [dispatch]);

  return (
    <>
      <FlatList
        data={products}
        renderItem={itemData => (
          <ProductItem
            name={itemData.item.name}
            price={itemData.item.price}
            image={itemData.item.imageId}
            onShowDetails={() =>
              navigation.navigate('ProductDetailScreen', {
                productId: itemData.item.id,
                name: itemData.item.name,
              })
            }
            onAddToCart={amount =>
              dispatch(cartActions.addToCart(itemData.item, amount, 'deviceA'))
            }
          />
        )}
      />
    </>
  );
};
export const ProductOverviewScreenOptions = navData => {
  const [togglePopup, setTogglePopup] = useState(false);

  return {
    headerTitle: 'All Products',
    headerLeft: () => (
      <>
        <ChooseDevicePopup
          setTogglePopup={setTogglePopup}
          togglePopup={togglePopup}
        />

        <HeaderButtons HeaderButtonComponent={CartHeaderButton}>
          <Item
            color={'lightGreen'}
            title='Menu'
            iconName='md-menu'
            onPress={() => {
              setTogglePopup(true);
            }}
          />
        </HeaderButtons>
      </>
    ),
    headerRight: () => (
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
  };
};
export default ProductsOverviewScreen;
