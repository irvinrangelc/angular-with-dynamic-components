import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  template: `
    <p>lazy1 component</p>
    <p>@Input: {{ data }}</p>
  `
})
export class Lazy1Component {
  @Input() data: any;
  @Output() saveData = new EventEmitter();
}
