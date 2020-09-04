import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  template: `
    <p>lazy2 component</p>
    <p>@Input: {{ data }}</p>
  `
})
export class Lazy2Component {
  @Input() data: any;
  @Output() saveData = new EventEmitter();
}
