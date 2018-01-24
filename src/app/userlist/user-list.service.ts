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
export class UserListService {

  constructor(private _http: Http) { }

  

   getUsers(): Observable<RegisterUser[]> {
        return this._http.get(AppSettings.API_ENDPOINT+"/users")
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
    private extractData(res: Response) {
	let body = res.json();
        return body;
    }
}
