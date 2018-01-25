import { Injectable } from '@angular/core';
import {User} from '../shared/user';
import {AppSettings} from '../appSettings';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {

  constructor(private _http: Http) { }

  userLogin(user:User){
  
          let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this._http.post(AppSettings.API_ENDPOINT +"/userLogin", user, options)
           .map(success => success)
           .catch(this.handleError);
    

  }

 
private handleError(err: Response | any) {
  let errorMessage = '';
 if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `${err._body}`;
        }
       return Observable.throw(errorMessage);
    }
 
}
