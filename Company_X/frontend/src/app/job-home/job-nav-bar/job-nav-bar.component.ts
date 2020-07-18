import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-nav-bar',
  templateUrl: './job-nav-bar.component.html',
  styleUrls: ['./job-nav-bar.component.css']
})
export class JobNavBarComponent implements OnInit {

  public items = [
    {'name': 'All Jobs', 'url': 'alljobs'},
    {'name': 'Find Job', 'url': 'findjob'},
    {'name': 'Add Job', 'url': 'addjob'},
    {'name': 'Update Job', 'url': 'updatejob'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
