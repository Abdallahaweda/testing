import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
title = 'From Home';
arr : Array<any>= [];

constructor(){
  this.arr = [2, 4,5,6,7,9,432,23]
}
}
