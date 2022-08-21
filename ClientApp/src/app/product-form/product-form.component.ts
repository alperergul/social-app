import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Moldel';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  @Input() products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addProduct(name: string, price: number, isactive: boolean) {
    const product = new Product(0, name, price, isactive);
    this.productService.addProduct(product).subscribe((product) => {
      this.products.push(product);
    });
  }
}
