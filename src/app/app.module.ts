import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DynamicOutletComponent } from './dynamic-component-loader/dynamic-outlet/dynamic-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicOutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
