import { Injectable } from '@angular/core';
import {RegisterUser} from '../shared/registeruser';
import {AppSettings} from '../appSettings';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Injectable()
export class UserProfileService {

  constructor(private _http: Http) { }

  

getUser(userId:string): Observable<RegisterUser[]> {
        return this._http.get(AppSettings.API_ENDPOINT+"/getUser/"+userId)
            .map(this.extractData)
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
            errorMessage = `Server returned code: ${err.message}`;
        }
       
       return Observable.throw(errorMessage);
    }

     updateUser(registerUser:RegisterUser){
  
          let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this._http.post(AppSettings.API_ENDPOINT +"/updateUser", registerUser, options)
           .map(success => success.status)
           .catch(this.handleError);
    

  }
    private extractData(res: Response) {
	let body = res.json();
    console.log(body);
        return body;
    }
}
