import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  error = false;
  oneJob = [];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  async submit() {
    this.IsSubmitted = true;
    this.error = false;

    if(this.findJob.valid){
      const url = "http://localhost:3000/job/onejob?jobName=" + this.findJob.value.jn + "&partId=" + this.findJob.value.pid + "";
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
