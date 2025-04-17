import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product: any;

  // generateStars(rating: number): string[] {
  //   const stars: string[] = [];
  //   const fullStars = Math.floor(rating);
  //   const hasHalfStar = rating % 1 >= 0.5;
    
  //   for (let i = 0; i < fullStars; i++) {
  //     stars.push('bi-star-fill');
  //   }
    
  //   if (hasHalfStar) {
  //     stars.push('bi-star-half');
  //   }
    
  //   while (stars.length < 5) {
  //     stars.push('bi-star');
  //   }
    
  //   return stars;
  // }
}
