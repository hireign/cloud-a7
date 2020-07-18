import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderNavBarComponent } from './order-home/order-nav-bar/order-nav-bar.component';
import { OrderHomeComponent } from './order-home/order-home.component';
import { JobNavBarComponent } from './job-home/job-nav-bar/job-nav-bar.component';
import { JobHomeComponent } from './job-home/job-home.component';
import { AllJobsComponent } from './job-home/all-jobs/all-jobs.component';
import { FindJobComponent } from './job-home/find-job/find-job.component';
import { AddJobComponent } from './job-home/add-job/add-job.component';
import { UpdateJobComponent } from './job-home/update-job/update-job.component';
import { AllOrdersComponent } from './order-home/all-orders/all-orders.component';
import { SearchOrderComponent } from './order-home/search-order/search-order.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrderNavBarComponent,
    OrderHomeComponent,
    JobNavBarComponent,
    JobHomeComponent,
    AllJobsComponent,
    FindJobComponent,
    AddJobComponent,
    UpdateJobComponent,
    AllOrdersComponent,
    SearchOrderComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
