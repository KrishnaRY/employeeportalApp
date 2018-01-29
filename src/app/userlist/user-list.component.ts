import { Component, OnInit } from '@angular/core';

import {RegisterUser} from '../shared/registeruser';
import {UserListService} from './user-list.service'

@Component({
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    pageTitle: string = 'List of Users';
     errorMessage: string;
    pages : number = 4;
     pageSize : number = 2;
   pageNumber : number = 0;
   currentIndex : number = 1;
   pagesIndex : Array<number>;
   pageStart : number = 1;
   userList:RegisterUser[] = [];
    filteredUsers: RegisterUser[];
    users: RegisterUser[] = [];
    _listFilter: string;
        loading = false;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.performFilter(this.listFilter);
    }

   

    constructor(private userListService:UserListService) {
      
    }

 
  /*  performFilter(filterBy: string): RegisterUser[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.users.filter((user: RegisterUser) =>
              user.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }*/
 
    ngOnInit(): void {
         this.refreshData();
        
    }
  performFilter(filterBy: string){
      this.filteredUsers = [];
      if(filterBy != ""){
            this.userList.forEach(element => {
                if(element.firstName.toUpperCase().indexOf(filterBy.toUpperCase())>=0){
                  this.filteredUsers.push(element);
               }
            });
      }else{
         this.filteredUsers = this.userList;
      }
      console.log(this.filteredUsers);
      this.init();
   }

     init(){
       
         this.currentIndex = 1;
         this.pageStart = 1;
         this.pages = 4;

         this.pageNumber = parseInt(""+ (this.filteredUsers.length / this.pageSize));
         if(this.filteredUsers.length % this.pageSize != 0){
            this.pageNumber ++;
         }
    
         if(this.pageNumber  < this.pages){
               this.pages =  this.pageNumber;
         }
       
         this.refreshItems();
         console.log("this.pageNumber :  "+this.pageNumber);
   }

    refreshItems(){
               this.users = this.filteredUsers.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
               this.pagesIndex =  this.fillArray();
   }

   fillArray(): any{
      var obj = new Array();
      for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
                  obj.push(index);
      }
      return obj;
   }

    prevPage(){
      if(this.currentIndex>1){
         this.currentIndex --;
      } 
      if(this.currentIndex < this.pageStart){
         this.pageStart = this.currentIndex;
      }
      this.refreshItems();
   }
   nextPage(){
      if(this.currentIndex < this.pageNumber){
            this.currentIndex ++;
      }
      if(this.currentIndex >= (this.pageStart + this.pages)){
         this.pageStart = this.currentIndex - this.pages + 1;
      }
 
      this.refreshItems();
   }
    setPage(index : number){
         this.currentIndex = index;
         this.refreshItems();
    }
delete(id){
    this.loading=true;
    this.userListService.deleteUser(id) .subscribe(response => {
             // this.router.navigate(['/user']); 
                   this.refreshData();       
            },
                error => this.errorMessage = <any>error);
         
     this.loading=false;
}


    refreshData(){
        this.userListService.getUsers()
                .subscribe(users => {
                    this.users = users;
                    this.filteredUsers = this.users;
                    this.userList=this.users;
                    console.log( this.filteredUsers.length);
                    this.init();
                },
                    error => this.errorMessage = <any>error);
    }
}
