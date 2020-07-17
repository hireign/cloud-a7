import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobHomeComponent} from './job-home/job-home.component';
import { OrderHomeComponent } from './order-home/order-home.component';


const routes: Routes = [
  { path: "job", component: JobHomeComponent},
  { path: "order", component: OrderHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
