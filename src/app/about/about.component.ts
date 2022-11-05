import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  loginName = 'user';

  myColor = 'red';
  bgColor = '';
  bgColor2 = '';
  constructor() {}

  ngOnInit(): void {}
}
