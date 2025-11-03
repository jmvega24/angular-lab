import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { CounterComponent } from "./components/counter-component/counter-component";
import { HeaderComponent } from './components/header-component/header-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { ProductListComponent } from './components/product-list-component/product-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CounterComponent, HeaderComponent,
    FooterComponent, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-lab');

  isLoggedIn = true;
  userName = 'Juan Vega';
}
