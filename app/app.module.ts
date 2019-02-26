import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";

import { PassengerDashboardModule } from "./passenger-dashboard/passegner-dashboard.module";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    // custom modules
    PassengerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{

} 