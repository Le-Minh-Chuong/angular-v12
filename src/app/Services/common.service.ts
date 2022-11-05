import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  // private _counter = 0;
  // public get counter() {
  //   return this._counter;
  // }
  // public set counter(value) {
  //   this._counter = value;
  // }
  private _counter = 0;
  public get counter() {
    return this._counter;
  }
  public set counter(value) {
    // if (value > 5) {
    //   throw new Error('counter > 10');
    // }
    this._counter = value;
  }

  constructor() {}

  counterIncrease(): void {
    this._counter++;
  }

  pow(n: number): number {
    return n * n;
  }
}
