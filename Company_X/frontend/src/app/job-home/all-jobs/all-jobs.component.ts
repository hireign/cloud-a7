import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {

  public allJobs = [];

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    await this.getAllJobs();
    console.log(this.allJobs);
  }

  private async getAllJobs() {
    const data = await this.http.get<any>("http://localhost:3000/job/alljobs").toPromise();
    if(data.status == true){
      this.allJobs = data.message;
    }
  }
}
