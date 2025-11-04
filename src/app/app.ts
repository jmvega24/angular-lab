import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header-component/header-component';
import { FooterComponent } from './layout/footer-component/footer-component';
import { HomeComponent } from './pages/home-component/home-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
