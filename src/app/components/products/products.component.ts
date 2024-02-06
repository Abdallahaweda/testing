import { Component } from '@angular/core';
import { IProduct } from '../../Data/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  p: IProduct 
  constructor(){
    this.p = 
      {name: 'HP',describe: 'labtop',img: 'fjsdlkf',price: 22000}

  }
}
