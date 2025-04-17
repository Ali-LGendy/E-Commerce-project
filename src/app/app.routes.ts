import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent), title: 'About'},
    {path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent), title: 'Contact' },
    {path: 'products', component: ProductsComponent, title: 'Products'},
    {path: '**', component: NotFoundComponent, title: 'Not Found'},
];
