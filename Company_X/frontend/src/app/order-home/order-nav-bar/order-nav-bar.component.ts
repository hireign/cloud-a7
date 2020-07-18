import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-nav-bar',
  templateUrl: './order-nav-bar.component.html',
  styleUrls: ['./order-nav-bar.component.css']
})
export class OrderNavBarComponent implements OnInit {

  public items = [
    {'name': 'All Orders', 'url': 'allorders'},
    {'name': 'Find Order', 'url': 'findorder'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
