import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductsItem';

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);
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
