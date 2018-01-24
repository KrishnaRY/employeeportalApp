import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from './register.service'
@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pageTitle='Register';
   errorMessage: string;
 model: any = {};
    loading = false;
  constructor( private router: Router,private registerService:RegisterService) { }

  ngOnInit() {
  }
 register() {
        this.loading = true;
         this.registerService.register(this.model) .subscribe(response => {
           
                 this.router.navigate(['/login']);   
                },
                    error => {
                      this.errorMessage = <any>error;
                      console.log(this.errorMessage);
                      this.loading = false;
                       });
                         
      
        
    }
}
