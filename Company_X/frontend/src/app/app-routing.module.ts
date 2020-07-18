import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobHomeComponent} from './job-home/job-home.component';
import { OrderHomeComponent } from './order-home/order-home.component';
import {AllJobsComponent} from './job-home/all-jobs/all-jobs.component';
import {FindJobComponent} from './job-home/find-job/find-job.component';
import {AddJobComponent} from './job-home/add-job/add-job.component';
import {UpdateJobComponent} from './job-home/update-job/update-job.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { AllOrdersComponent } from './order-home/all-orders/all-orders.component';
import { SearchOrderComponent } from './order-home/search-order/search-order.component';


const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
  },
  {
    path: "job", component: JobHomeComponent, children: [
      { path: "", redirectTo: "job", pathMatch: "full"},
      { path: "alljobs", component: AllJobsComponent, outlet: "job"},
      { path: "findjob", component: FindJobComponent, outlet: "job"},
      { path: "addjob", component: AddJobComponent, outlet: "job"},
      { path: "updatejob", component: UpdateJobComponent, outlet: "job"}
    ]
  },
  {
    path: "order", component: OrderHomeComponent, children: [
      { path: "", redirectTo: "order", pathMatch: "full"},
      { path: "allorders", component: AllOrdersComponent, outlet: "order"},
      { path: "searchorder", component: SearchOrderComponent, outlet: "order"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
