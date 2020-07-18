import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent implements OnInit {

  
  findJob = this.fb.group({
    jn: ['', [Validators.required]]
  });

  IsSubmitted = false;
  error = false;
  oneJob = [];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  async submit() {
    this.IsSubmitted = true;
    this.error = false;

    if(this.findJob.valid){
      const url = "http://localhost:3000/order/oneorder?jobName=" + this.findJob.value.jn + "";
      await this.getJob(url);
    }
  }

  private async getJob(url) {
    this.oneJob = [];
    const data = await this.http.get<any>(url).toPromise();
    if(data.status == true){
      this.oneJob = data.message;
      this.reset();
    }else{
      return;
    }

    console.log(this.oneJob);
  }

  reset() {
    this.IsSubmitted = false;
    this.findJob.reset();
  }

}
