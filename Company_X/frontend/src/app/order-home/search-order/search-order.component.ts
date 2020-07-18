import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent implements OnInit {


  findOrder = this.fb.group({
    jn: ['', [Validators.required]]
  });

  IsSubmitted = false;
  noMatch = false;
  order = [];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  get control(){
    return this.findOrder.controls;
  }

  async submit() {
    this.IsSubmitted = true;
    this.noMatch = false;

    if(this.findOrder.valid){
      const url = "http://localhost:3000/order/oneorder?jobName=" + this.findOrder.value.jn;
      await this.getOrder(url);
    }
  }

  private async getOrder(url) {
    this.order = [];
    const data = await this.http.get<any>(url).toPromise();
    if(data.status == true){
      this.order = data.message;
      this.reset();
    }else{
      this.noMatch = true;
    }
  }

  reset() {
    this.IsSubmitted = false;
    this.findOrder.reset();
  }

}
