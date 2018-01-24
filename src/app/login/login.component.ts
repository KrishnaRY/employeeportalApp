import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService} from './login.service'
//import { routing } from './app.routing'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    pageTitle='Login';
        model: any = {};
      loading = false;
          returnUrl: string;
            errorMessage: string;
  constructor(   private route: ActivatedRoute,
        private router: Router,private loginService:LoginService) { }

  ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
 login() {
        this.loading = true;
        this.loginService.userLogin(this.model) .subscribe(response => {
           
                 this.router.navigate(['/admin']);   
                },
                    error => {
                      this.errorMessage = <any>error;
                      console.log(this.errorMessage);
                      this.loading = false;
                       });
           
      
    }
}
