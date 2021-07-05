import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
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
  const [amount, setAmount] = useState(1);
  const [inputText, setInputText] = useState('Enter desired amount');

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
            onPress={onAddToCart}
          />
          <View style={styles.quantity}>
            <TextInput
              textAlign='center'
              keyboardType='numeric'
              defaultValue={inputText}
              onTextInput={event => setAmount(event.target.value)}
              onFocus={() => setInputText('')}
              style={styles.quantity}
              // editable={false}
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
    fontFamily: 'fira-sans-bold',
    fontSize: 18,
    marginVertical: 4,
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontFamily: 'fira-sans',
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
  },
  button: { marginBottom: 20 },
  icon: { display: 'flex' },
});

export default ProductItem;
