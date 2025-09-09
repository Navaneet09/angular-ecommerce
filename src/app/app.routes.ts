import { Routes, RouterModule } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { App } from './app';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product';

export const routes: Routes = [
    {path: 'category/:id', component: ProductList},
    {path: 'category', component: ProductList},
    {path: 'products', component: ProductList},
    {path: '', redirectTo: '/products', pathMatch: 'full'},
    {path: '**', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
    // declarations: [App, ProductList],
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [
        ProductService
    ],
    // bootstrap: [App]
}) 
export class AppRouter {}