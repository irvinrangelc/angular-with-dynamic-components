import { NgModule } from '@angular/core';
import { Lazy1Component } from './components/lazy1/lazy1.component';
import { Lazy2Component } from './components/lazy2/lazy2.component';

import { CommonComponentsModule } from '../../shared/common-components.module';

@NgModule({
  declarations: [
    Lazy1Component
  ],
  imports: [
    CommonComponentsModule
  ]
})
export class GlobalModule { }
