import { Component } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {id: 1, image: "watch1.png", name: "MIDO", price: 2000, onSale: true},
    {id: 2, image: "watch2.png", name: "HAMILTO", price: 5000, onSale: true},
    {id: 3, image: "watch3.png", name: "TISSOT", price: 3500, onSale: false},
  ] 
}
