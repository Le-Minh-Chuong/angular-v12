import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  parentMessage = '';
  @ViewChild('childJohn') childJohn?: ChildComponent;
  @ViewChild('childMichael') childMichael?: ChildComponent;
  constructor() {}

  ngOnInit(): void {}

  helloBoy(name: string) {
    this.parentMessage = `hello ${name}`;
  }

  giveMoney() {
    this.childJohn?.takeMoney(5);
    this.childMichael?.takeMoney(15);
  }
}
