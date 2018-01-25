import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { UserListComponent } from './userlist/index';
import { RegisterComponent } from './register/index';
import { NavigationComponent } from './leftpanelnavigation/index';
import { UserprofileComponent } from './userprofile/index';
const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
   { path: 'userlist/:userType', component: UserListComponent },
    { path: 'navigationType/:userType', component: NavigationComponent },
     { path: 'userprofile/:userType', component: UserprofileComponent },
    
  
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);