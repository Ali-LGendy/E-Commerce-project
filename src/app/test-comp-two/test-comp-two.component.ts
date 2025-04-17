import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-test-comp-two',
  imports: [ProductsComponent],
  templateUrl: './test-comp-two.component.html',
  styleUrl: './test-comp-two.component.css'
})
export class TestCompTwoComponent {
  display(info: string) {
    console.log("display info from parent component", info);
  }
}
