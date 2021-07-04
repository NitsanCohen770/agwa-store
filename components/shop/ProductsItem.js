import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TextInput,
  Pressable,
} from 'react-native';

const ProductItem = ({ image, name, price, onAddToCart, onShowDetails }) => {
  return (
    <Pressable onPress={onShowDetails}>
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
            title='Add to Cart'
            onPress={onAddToCart}
          />
          <View style={styles.quantity}>
            <TextInput
              textAlign='center'
              keyboardType='numeric'
              defaultValue={1}
              editable={false}
              inlineImageLeft={<Icon name='ios-book' color='#4F8EF7' />}
            />
            <Icon name='plus' />
          </View>
        </View>
      </View>
    </Pressable>
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
    height: '60%',
  },
  name: {
    fontSize: 18,
    marginVertical: 4,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
    display: 'flex',
    justifyContent: 'center',
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
});

export default ProductItem;
