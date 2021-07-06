import React from 'react';
import { useState } from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/';
import Colors from '../../constants/Colors';

const ProductDetailScreen = ({ route: { params }, navigation }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState('Tap to change amount');
  const { productId, name } = params;
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(product => product.id === productId)
  );
  console.log(selectedProduct.imageUrl);
  return (
    <ScrollView>
      <Image
        resizeMode='cover'
        style={styles.image}
        source={{
          uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${selectedProduct.imageUrl}@3x.jpg`,
        }}
      />
      <View style={styles.button}>
        <Button
          color={Colors.blue}
          title='Add to cart'
          onPress={() => {
            let defaultQuantity;
            if (isNaN(quantity)) {
              defaultQuantity = 1;
            }
            dispatch(
              cartActions.addToCart(
                selectedProduct,
                defaultQuantity || quantity,
                'deviceA'
              )
            );
          }}
        />
      </View>
      <View>
        <TextInput
          textAlign='center'
          keyboardType='numeric'
          defaultValue={quantity}
          onChange={event => {
            setQuantity(parseInt(event.target.value));
          }}
          onFocus={() => setQuantity(1)}
          style={styles.quantity}
        />
      </View>
      <Text style={styles.price}>{selectedProduct.price.toFixed(2)} NIS</Text>
      <Text style={styles.description}>{selectedProduct.description}.</Text>
      <View style={styles.moreDetails}>
        <View>
          <Text style={styles.details}>
            <Text style={styles.boldText}>Seed To Crop:</Text>{' '}
            {selectedProduct.seedToCrop}.
          </Text>
        </View>
        <View>
          <Text style={styles.details}>
            <Text style={styles.boldText}> Yield Value:</Text>{' '}
            {selectedProduct.yieldValue}.
          </Text>
        </View>
        <View>
          <Text style={styles.details}>
            <Text style={styles.boldText}>life Cycle:</Text>{' '}
            {selectedProduct.lifeCycle}.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export const ProductDetailScreenOptions = navData => {
  return {
    headerTitle: navData.route.params.name,
  };
};
const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
  },
  price: {
    fontFamily: 'FiraSans_400Regular',
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontFamily: 'FiraSans_700Bold',
    fontSize: 18,
    textAlign: 'center',
    color: Colors.lightGreen,
    marginHorizontal: 10,
  },
  moreDetails: {
    textAlign: 'center',
    marginTop: 20,
  },
  details: {
    marginVertical: 5,
    textAlign: 'center',
  },
  boldText: { fontWeight: 'bold' },
  button: { marginHorizontal: 100, marginVertical: 20, textAlign: 'center' },
  quantity: {},
});

export default ProductDetailScreen;
