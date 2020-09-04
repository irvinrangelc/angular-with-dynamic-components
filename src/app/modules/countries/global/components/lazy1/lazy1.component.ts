import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  template: `
    <p>lazy1 component</p>
    <p>@Input: {{ data }}</p>

    <app-lazy1-child-component></app-lazy1-child-component>
  `
})
export class Lazy1Component {
  @Input() data: any;
  @Output() saveData = new EventEmitter();
}
