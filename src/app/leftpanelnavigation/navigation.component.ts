import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    userTypeAdmin: boolean = false;
    userId:string;
  constructor(private _route: ActivatedRoute,
    private _router: Router,) { }

  ngOnInit() {
      const param = this._route.snapshot.paramMap.get('userType');
      if(param=='admin'){
        this.userTypeAdmin=true;
      }else{
        this.userId=param;
        this.userTypeAdmin=false;
      }
    
  }

}
