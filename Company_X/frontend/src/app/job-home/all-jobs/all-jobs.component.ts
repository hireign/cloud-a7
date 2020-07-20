import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {

  public allJobs = [];

  constructor(private http: HttpClient) {
  }

  async ngOnInit() {
    await this.getAllJobs();
  }

  private async getAllJobs() {
    const data = await this.http.get<any>('https://bht6lsihyk.execute-api.us-east-1.amazonaws.com/production/job/alljobs').toPromise();
    if (data.status == true) {
      this.allJobs = data.message;
    }
  }

  public async deleteJob(job, partId) {

    const body = {jobName: job, partId: partId};
    const url = 'https://bht6lsihyk.execute-api.us-east-1.amazonaws.com/production/job/deletejob';
    const data = await this.http.put<any>(url, body).toPromise();
    alert(data.message);
    if (data.status == true) {
      await this.getAllJobs();
    }
  }
}
