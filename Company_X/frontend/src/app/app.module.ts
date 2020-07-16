import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderNavBarComponent } from './order-nav-bar/order-nav-bar.component';
import { OrderHomeComponent } from './order-home/order-home.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderNavBarComponent,
    OrderHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
