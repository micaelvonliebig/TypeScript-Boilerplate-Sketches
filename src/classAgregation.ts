export class ShopKart {
  private readonly products: Product[] = [];

  insertProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  productsAmount(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('Shirt', 50.0);
const product2 = new Product('Mug', 30.0);
const product3 = new Product('Pen', 2.0);

const shopKart = new ShopKart();
shopKart.insertProducts(product1);
shopKart.insertProducts(product2);
shopKart.insertProducts(product3);
console.log(shopKart.totalValue());
