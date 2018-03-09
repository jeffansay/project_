import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

domain = "http://localhost:3000";
user;
  constructor(
    private _http: Http,
  ) { }


  registerUser(user){

    
  }


}
