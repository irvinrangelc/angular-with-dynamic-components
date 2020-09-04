import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../shared/material.module';
import { DynamicOutletComponent } from './../../dynamic-component-loader/dynamic-outlet/dynamic-outlet.component';
import { Lazy1ChildComponent } from '../countries/global/components/lazy1-child/lazy1child.component';

@NgModule({
  declarations: [
    DynamicOutletComponent,
    Lazy1ChildComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    DynamicOutletComponent,
    Lazy1ChildComponent
  ]
})
export class CommonComponentsModule { }
