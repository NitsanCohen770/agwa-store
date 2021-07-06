import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../constants/Colors';
import { useState } from 'react';

const ProductItem = ({ image, name, price, onAddToCart, onShowDetails }) => {
  const [quantity, setQuantity] = useState('Tap to change amount');

  return (
    <TouchableOpacity onPress={onShowDetails}>
      <View style={styles.product}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={{
            uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${image}@3x.jpg`,
          }}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price.toFixed(2)} NIS</Text>
        <View style={styles.cartActions}>
          <Button
            style={styles.button}
            color={Colors.blue}
            title='Add to Cart'
            onPress={() => {
              let defaultQuantity;
              if (isNaN(quantity)) {
                defaultQuantity = 1;
              }
              onAddToCart(defaultQuantity || quantity);
            }}
          />
          <View style={styles.quantity}>
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
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, hight: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  image: {
    width: '100%',
    height: '50%',
  },
  name: {
    fontFamily: 'FiraSans_700Bold',
    fontSize: 18,
    marginVertical: 4,
    textAlign: 'center',
    marginBottom: 5,
    color: Colors.lightGreen,
  },
  price: {
    fontFamily: 'FiraSans_400Regular',
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 10,
  },
  cartActions: {
    display: 'flex',
    alignItems: 'center',
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  button: { marginBottom: 20 },
  icon: { display: 'flex' },
});

export default ProductItem;
