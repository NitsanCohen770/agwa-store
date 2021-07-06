import React, { useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ProductItem from '../../components/shop/ProductsItem';
import * as cartActions from '../../store/actions/';
import * as productActions from '../../store/actions/';
import CartHeaderButton from '../../components/UI/HeaderButton';

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.fetchProducts());
    return () => {};
  }, [dispatch]);

  return (
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
  );
};
export const ProductOverviewScreenOptions = navData => {
  console.log(navData);
  return {
    headerTitle: 'All Products',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CartHeaderButton}>
        <Item
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
