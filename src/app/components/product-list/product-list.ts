import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';
import { CurrencyPipe, NgForOf } from "@angular/common";
import { Product } from '../../common/product';
// import { NgForOf } from "../../../../node_modules/@angular/common/common_module.d";

@Component({
  selector: 'app-product-list',
  imports: [NgForOf, CurrencyPipe ],
  templateUrl: './product-list-grid.html',
  // templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit{

  products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listProducts();
  }
  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }
}
