import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { CommonComponentsModule } from './../../modules/shared/common-components.module';

import { PageComponentComponent } from '../../components/page-component/page-component.component';
import { Component1Component } from '../../components/component1/component1.component';
import { Component2Component } from '../../components/component2/component2.component';
import { Component3Component } from '../../components/component3/component3.component';
import { EntryComponent1Component } from '../../components/entry-component1/entry-component1.component';

@NgModule({
  declarations: [
    PageComponentComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    EntryComponent1Component
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    CommonComponentsModule
  ]
})
export class ComponentsModule { }
