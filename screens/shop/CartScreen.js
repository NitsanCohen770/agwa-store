import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import CartItem from '../../components/shop/CartItem';
import Colors from '../../constants/Colors';

const CartScreen = () => {
  const currentDevice = useSelector(state => state.cart.currentDevice);
  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart[currentDevice].items) {
      transformedCartItems.push({
        productId: key,
        name: state.cart[currentDevice].items[key].name,
        price: state.cart[currentDevice].items[key].price,
        quantity: state.cart[currentDevice].items[key].quantity,
        sum: state.cart[currentDevice].items[key].sum,
      });
    }
    return transformedCartItems;
  });

  const cartTotalAmount = useSelector(
    state => state.cart[currentDevice].totalAmount
  );
  console.log(cartItems);
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${cartTotalAmount} NIS</Text>
        </Text>
        <Button
          disabled={cartTotalAmount === 0}
          color={Colors.blue}
          title='Order Now'
        />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.productId}
        renderItem={itemData => (
          <CartItem
            quantity={itemData.item.quantity}
            name={itemData.item.name}
            sum={itemData.item.sum}
            productId={itemData.item.productId}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { margin: 20 },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, hight: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  summaryText: {
    fontFamily: 'FiraSans_700Bold',
    fontSize: 18,
    alignItems: 'center',
  },
  amount: { color: Colors.lightGreen },
});

export default CartScreen;
