import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name = 'Chương';
  age = 23;
  fruits = ['Apple', 'Orange', 'Banana'];
  red = 'text-red'
  fruits2 = [
    { name: 'Apple', price: 20, onSale: true },
    { name: 'Orange', price: 10, onSale: false },
    { name: 'Banana', price: 15.275, onSale: false },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log('fruits = ', this.fruits);
    console.log('fruits = ', this.fruits2);
  }
}
