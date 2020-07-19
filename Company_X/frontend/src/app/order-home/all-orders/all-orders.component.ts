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
    const data = await this.http.get<any>("https://ghc5n1arz7.execute-api.us-east-1.amazonaws.com/Dev/order/allorders").toPromise();
    if(data.status == true){
      this.allOrders = data.message;
    }
  }
}
