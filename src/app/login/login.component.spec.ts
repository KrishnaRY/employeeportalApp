import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LoginService } from './login.service';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule,Router } from '@angular/router';
import {User} from '../shared/user';
import { Observable } from 'rxjs/Observable';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
let spy: any;

  beforeEach(async(() => {


    TestBed.configureTestingModule({
        imports: [ FormsModule,RouterTestingModule,HttpModule,RouterModule],
         providers:[ LoginService,
         { provide: LoginService, useClass: LoginService }
         
         ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',  inject([ LoginService], (loginService) => {
    expect(component).toBeTruthy();
  }));
 it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Login');
  }));

  it('should login and redirect on Admin', inject([ LoginService,Router], (loginService,router) => {
  //  loginService. = 'test';
 let user: User;
 //component.login();
 spy =spyOn(loginService, 'userLogin')
                       .and.returnValue(Observable.throw({status: 200}));
//expect(router.navigate).toHaveBeenCalledWith(['admin']);
  //expect(loginService.userLogin(user)).toHaveBeenCalled();
 
//spyOn(loginService, 'userLogin').and.returnValue(Observable.of(someData))
 // spyOn(loginService, 'userLogin').and.returnValue({ subscribe: () => {} })
  // do stuff
 // expect(loginService.userLogin).toHaveBeenCalled();
   // spyOn(loginService, 'userLogin');
   //  expect(component.login()).toHaveBeenCalledWith(user);
  //  loginService.userLogin(user);
   // expect(config.setCredentials).toHaveBeenCalledWith('test');
    //expect(router.navigate).(['userList']);
  }));
 

});
