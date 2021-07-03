class Product {
  constructor(
    id,
    agwaDeviceId,
    name,
    imageUrl,
    seedToCrop,
    yield,
    lifeCycle,
    description,
    price
  ) {
    this.id = id;
    this.agwaDeviceId = agwaDeviceId;
    this.name = name;
    this.imageUrl = imageUrl;
    this.seedToCrop = seedToCrop;
    this.yield = yield;
    this.lifeCycle = lifeCycle;
    this.description = description;
    this.price = price;
  }
}
