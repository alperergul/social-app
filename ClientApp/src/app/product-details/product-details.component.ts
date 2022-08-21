import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Moldel';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;
  @Input() products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addProduct(id: number, name: string, price: number, isactive: boolean) {
    const product = new Product(id, name, price, isactive);
    this.productService.updateProduct(product).subscribe((result) => {
      this.products.splice(
        this.products.findIndex((x) => x.productId == product.productId),
        1,
        product
      );
    });
    this.product = null;
  }
}
