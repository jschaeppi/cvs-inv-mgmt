import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../../Types/login";
import {Observable} from "rxjs";
import {CommonFunctions} from "../../common/commonFunctions";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  comFunc = new CommonFunctions();
  constructor(private http: HttpClient) { }

  login(login: Login) : Observable<Login> {
    return this.http.post<Login>(this.comFunc.baseUrl +'/api/login', + login);
  }

  authenticate(credentials: Login) : Observable<Login>{
    return this.http.get<Login>(this.comFunc.baseUrl +'/api/login' + credentials);
  }
}
