import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-nav-bar',
  templateUrl: './job-nav-bar.component.html',
  styleUrls: ['./job-nav-bar.component.css']
})
export class JobNavBarComponent implements OnInit {

  public items = [
    {'name': 'Home', 'url': 'login'},
    {'name': 'All Jobs', 'url': 'register'},
    {'name': 'Find Job', 'url': 'explain'},
    {'name': 'Add Job', 'url': 'aboutus'},
    {'name': 'Update Job', 'url': 'aboutus'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
