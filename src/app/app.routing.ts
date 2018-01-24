import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { UserListComponent } from './userlist/index';
import { RegisterComponent } from './register/index';
import { AdminnavigationComponent } from './adminnavigation/index';
const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
   { path: 'userlist', component: UserListComponent },
    { path: 'admin', component: AdminnavigationComponent },
  
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);