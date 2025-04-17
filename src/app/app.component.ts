import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [NavBarComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frist_project';
}
