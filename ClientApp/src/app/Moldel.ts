export class Model {
  products: Array<Product>;

  constructor() {
    // this.products = [
    //   new Product(1, 'Samsung Galaxy S10', 2000, false),
    //   new Product(2, 'Samsung Galaxy S10+', 2500, false),
    //   new Product(3, 'Samsung Galaxy S10e', 3000, true),
    //   new Product(4, 'Samsung Galaxy S10e+', 3500, true),
    //   new Product(5, 'Samsung Galaxy S10+', 4000, true),
    //   new Product(6, 'Samsung Galaxy S10e', 4500, true),
    // ];
  }
}

export class Product {
  productId: number;
  name: string;
  price: number;
  isActive: boolean;

  constructor(id: number, name: string, price: number, isActive: boolean) {
    this.productId = id;
    this.name = name;
    this.price = price;
    this.isActive = isActive;
  }
}
