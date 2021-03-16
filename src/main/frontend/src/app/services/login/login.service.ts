import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../../Types/login";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: Login) : Observable<Login> {
    return this.http.post<Login>('/api/login', + login);
  }

  authenticate(credentials: Login) : Observable<Login>{
    return this.http.get<Login>('/api/login' + credentials);
  }
}
