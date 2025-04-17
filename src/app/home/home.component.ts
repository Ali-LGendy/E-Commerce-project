import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-home',
  imports: [ProductsComponent, CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
