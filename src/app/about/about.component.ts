import { Component, OnInit } from '@angular/core';
import { CommonService } from './../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  loginName = 'admin';

  counter = 0;
  counterPow = 0;
  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterPow = this.common.pow(this.counter);
    this.common.counter++;
  }
}
