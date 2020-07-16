import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-nav-bar',
  templateUrl: './order-nav-bar.component.html',
  styleUrls: ['./order-nav-bar.component.css']
})
export class OrderNavBarComponent implements OnInit {

  public items = [
    {'name': 'Home', 'url': 'login'},
    {'name': 'All orders', 'url': 'register'},
    {'name': 'Search order', 'url': 'explain'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
