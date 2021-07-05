import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductsItem';
import * as cartActions from '../../store/actions/cart';

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      renderItem={itemData => (
        <ProductItem
          name={itemData.item.name}
          price={itemData.item.price}
          image={itemData.item.imageUrl}
          onShowDetails={() =>
            navigation.navigate('ProductDetailScreen', {
              productId: itemData.item.id,
              name: itemData.item.name,
            })
          }
          onAddToCart={amount =>
            dispatch(cartActions.addToCart(itemData.item, amount))
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
  };
};
export default ProductsOverviewScreen;
