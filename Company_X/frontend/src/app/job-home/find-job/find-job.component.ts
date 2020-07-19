import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.css']
})
export class FindJobComponent implements OnInit {

  findJob = this.fb.group({
    jn: ['', [Validators.required]],
    pid: ['', [Validators.required]]
  });

  IsSubmitted = false;
  noMatch = false;
  oneJob = [];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  get control(){
    return this.findJob.controls;
  }

  async submit() {
    this.IsSubmitted = true;
    this.noMatch = false;

    if(this.findJob.valid){
      const url = "https://bht6lsihyk.execute-api.us-east-1.amazonaws.com/production/job/onejob?jobName=" + this.findJob.value.jn + "&partId=" + this.findJob.value.pid + "";
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
      this.noMatch = true;
    }
  }

  reset() {
    this.IsSubmitted = false;
    this.findJob.reset();
  }
}
