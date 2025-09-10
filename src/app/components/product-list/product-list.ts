import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';
import { CurrencyPipe, NgForOf, NgIf } from "@angular/common";
import { Product } from '../../common/product';
import { ActivatedRoute } from '@angular/router';
// import { NgForOf } from "../../../../node_modules/@angular/common/common_module.d";

@Component({
  selector: 'app-product-list',
  imports: [NgForOf, CurrencyPipe, NgIf ],
  templateUrl: './product-list-grid.html',
  // templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit{

  products: Product[] = [];
  currentCategoryId: number = 2;
  currentCategoryName: String = "";
  searchMode: boolean = false;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode) {
      this.handleSearchProducts(); 
    }
    else {
      this.handleListProducts();
    }
  }


  handleSearchProducts() {
    
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    //now search for the products using keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    );
  }

  handleListProducts() {

    //check if 'id' parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId) {

      //get 'id' param string and convert to number using '+'
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;

      // the "name" param string
      this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;
    }
    else{
      
      //no category id ... default to 1
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }

    //get the prods for given category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    )
  }
}
