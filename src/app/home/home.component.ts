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
  constructor() {}

  ngOnInit(): void {
    console.log('fruits = ', this.fruits);
  }
}
