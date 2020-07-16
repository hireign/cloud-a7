import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobNavBarComponent } from './job-nav-bar/job-nav-bar.component';
import { JobHomeComponent } from './job-home/job-home.component';

@NgModule({
  declarations: [
    AppComponent,
    JobNavBarComponent,
    JobHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
