import { Component } from '@angular/core';
import { Category } from '../category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories: Category[] = [
    {id:1, image:"modernWatches.png", price: 1000},
    {id:2, image:"classicWatches.png", price: 1500},
  ]
}
