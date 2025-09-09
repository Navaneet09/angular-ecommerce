import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// import { ProductList } from "./components/product-list/product-list";
import {  HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product';
import { ProductCategoryMenu } from "./components/product-category-menu/product-category-menu";

@Component({
  selector: 'app-root',
  imports: [ProductCategoryMenu, HttpClientModule, RouterOutlet, RouterLink, RouterLinkActive],
  providers: [ProductService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-ecommerce');
}
