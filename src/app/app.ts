import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ProductList } from "./components/product-list/product-list";
import {  HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product';

@Component({
  selector: 'app-root',
  imports: [ ProductList, HttpClientModule],
  providers: [ProductService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-ecommerce');
}
