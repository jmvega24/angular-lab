import { UpperCasePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  imports: [UpperCasePipe, CurrencyPipe],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss'
})
export class ProductListComponent {

  // Creo la lista de productos de prueba
  productos = [
    { id: '001', descripcion: 'Mouse Logitech M720', precio: 125000, stock: 15 },
    { id: '002', descripcion: 'Teclado Mecánico Redragon', precio: 230000, stock: 0 },
    { id: '003', descripcion: 'Monitor Samsung 27" IPC', precio: 980000, stock: 5}
  ];

  limpiarLista() {
   this.productos = []; 
  }

}
