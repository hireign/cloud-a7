import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  updateJob = this.fb.group({
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
    return this.updateJob.controls;
  }

  async submit() {
    this.IsSubmitted = true;

    if(this.updateJob.valid){
      const url = "https://bht6lsihyk.execute-api.us-east-1.amazonaws.com/production/job/modifyjob";
      await this.update(url);
    }
  }

  private async update(url) {
    const body = this.updateJob.value;
    const data = await this.http.put<any>(url, body).toPromise();
    if(data.status == true){
      this.message = data.message;
      this.reset();
    }else{
      this.message = data.message;
    }
  }

  reset() {
    this.IsSubmitted = false;
    this.updateJob.reset();
  }

}
