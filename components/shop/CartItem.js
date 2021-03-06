import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../store/actions';
import Colors from '../../constants/Colors';

const CartItem = ({ quantity, name, sum, productId }) => {
  const dispatch = useDispatch();
  const currentDevice = useSelector(state => state.cart.currentDevice);
  const currentQuantity = useSelector(
    state => state.cart[currentDevice].items[productId].quantity
  );
  const product = useSelector(state =>
    state.products.availableProducts.find(product => product.id === productId)
  );
  console.log(currentQuantity);
  return (
    <View style={style.cartItem}>
      <View style={style.itemData}>
        <Text style={style.quantity}>{quantity}</Text>
        <Text style={style.mainText}>{name}</Text>
      </View>
      <View style={style.itemData}>
        <Text style={style.sumText}>{sum.toFixed(2)} NIS</Text>
        <TouchableOpacity
          style={style.buttons}
          onPress={() =>
            dispatch(cartActions.decrementFromCart(product.id, currentDevice))
          }>
          {currentQuantity > 1 ? (
            <FontAwesome name='minus-square-o' size={24} color='black' />
          ) : (
            <FontAwesome name='minus-square-o' size={24} color='red' />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            dispatch(cartActions.addToCart(product, 1, currentDevice))
          }
          style={style.buttons}>
          <FontAwesome name='plus-square-o' size={24} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  cartItem: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    marginHorizontal: 'auto',
    marginVertical: 15,
    width: 350,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  quantity: {
    fontFamily: 'FiraSans_400Regular',
    color: '#888',
    fontSize: 16,
    marginRight: 10,
  },
  mainText: {
    fontFamily: 'FiraSans_700Bold',
    fontSize: 16,
    color: 'black',
  },
  sumText: { color: Colors.fontColor },
  buttons: { marginLeft: 20 },
});

export default CartItem;
