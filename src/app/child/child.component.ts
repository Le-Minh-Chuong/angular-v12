import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() name: string = '';
  @Output() childGreet: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onGreeting() {
    console.log(`${this.name} greeting to parent`);
    this.childGreet.emit(this.name);
  }

  takeMoney(amount: number) {
    console.log(`Con ${this.name} được nhận ${amount} đồng`);
  }
}
