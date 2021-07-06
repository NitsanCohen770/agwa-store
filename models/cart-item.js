export default class CartItem {
  constructor(quantity, productPrice, productName, sum) {
    this.quantity = quantity;
    this.price = productPrice;
    this.name = productName;
    this.sum = sum;
  }
}
