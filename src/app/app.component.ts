import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [NavBarComponent, ProductsComponent, CategoryComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frist_project';
}
