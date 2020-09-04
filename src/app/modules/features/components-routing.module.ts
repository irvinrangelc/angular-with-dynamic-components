import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponentComponent } from '../../components/page-component/page-component.component';

const routes: Routes = [
  { path: '', component: PageComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
