import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminnavigation',
  templateUrl: './adminnavigation.component.html',
  styleUrls: ['./adminnavigation.component.css']
})
export class AdminnavigationComponent implements OnInit {
 pageTitle: string ='Welcome to Admin DashBoard';
  constructor() { }

  ngOnInit() {
  }

}
