import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './userlist/user-list.component';
import { routing }        from './app.routing';
import { RegisterComponent } from './register/register.component';
import { RegisterService} from  './register/register.service';
import { UserListService} from  './userlist/user-list.service';
import { LoginService} from  './login/login.service';
import { HttpModule } from '@angular/http';
import { AdminnavigationComponent } from './adminnavigation/adminnavigation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    AdminnavigationComponent
  ],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [RegisterService,UserListService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
