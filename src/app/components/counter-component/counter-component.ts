import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.scss'
})
export class CounterComponent {
  count = 0;
  increase() { this.count++; }
  decrease() { this.count--; }
}
