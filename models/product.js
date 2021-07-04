export default class Product {
  constructor(
    id,
    name,
    imageUrl,
    seedToCrop,
    yieldValue,
    lifeCycle,
    description,
    price
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.seedToCrop = seedToCrop;
    this.yieldValue = yieldValue;
    this.lifeCycle = lifeCycle;
    this.description = description;
    this.price = price;
  }
}
