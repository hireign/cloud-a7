import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  public allOrders = [];

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    await this.getAllOrders();
  }

  private async getAllOrders() {
    const data = await this.http.get<any>("http://localhost:3000/order/allorders").toPromise();
    if(data.status == true){
      console.log(data);
      this.allOrders = data.message;
    }
  }
}
