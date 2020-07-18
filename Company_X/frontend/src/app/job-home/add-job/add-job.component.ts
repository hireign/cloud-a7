import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router"

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  addJob = this.fb.group({
    jobName: ['', [Validators.required]],
    partId: ['', [Validators.required]],
    qty: ['', [Validators.required]]
  });

  IsSubmitted = false;
  message = "";

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  get control(){
    return this.addJob.controls;
  }

  async submit() {
    this.IsSubmitted = true;

    if(this.addJob.valid){
      const url = "http://localhost:3000/job/addjob";
      await this.add(url);
    }
  }

  private async add(url) {
    const body = this.addJob.value;
    const data = await this.http.post<any>(url, body).toPromise();
    if(data.status == true){
      this.message = data.message;
      this.reset();
    }else{
      this.message = data.message;
    }
  }

  reset() {
    this.IsSubmitted = false;
    this.addJob.reset();
  }

}
