import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <h1>{{ count }} </h1>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  count: number = 0;

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

  constructor() { }

  ngOnInit() {
  }

}
