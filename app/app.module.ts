import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';

import { PassengerDashboardModule } from './passenger-dashboard/passegner-dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // angular modules
    BrowserModule,
    CommonModule,
    // custom modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule{

} 