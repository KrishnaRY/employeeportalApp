import { Component, OnInit } from '@angular/core';
import {RegisterUser} from '../shared/registeruser';
import {UserProfileService} from './userprofile.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
   users: RegisterUser[];
     user: RegisterUser;
      user1: RegisterUser;
  pageTitle: string = 'Update User';
  errorMessage: string;
  userId:string;
    model: any = {};
       loading = false;
  constructor(private userProfileService:UserProfileService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
     const param = this._route.snapshot.paramMap.get('userType');
    
     this.userId=param;
       this.refreshData();
     
       
  }
 refreshData(){
        this.userProfileService.getUser(this.userId)
                .subscribe(users => {
                    this.users = users;
                  this.users.filter((user: RegisterUser) =>
                  this.user=user);
                  this.model=this.user;
                   
                      
                },
                    error => this.errorMessage = <any>error);
    }
    resetUser(){
       this.refreshData();
       this._router.navigate(['/userprofile', this.user.id]);
                   
    }
updateuser() {
        this.loading = true;
        console.log(this.model.firstName);
         console.log(this.model.lastName);
          console.log(this.model.id);
              console.log(this.model.username);
         this.userProfileService.updateUser(this.model) .subscribe(response => {
            this._router.navigate(['/navigationType', this.user.id]);
         
                
                },
                    error => {
                      this.errorMessage = <any>error;
                      console.log(this.errorMessage);
                      this.loading = false;
                       });
                         
      
        
    }


}
