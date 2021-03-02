import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Phone} from "../../Types/Phone";

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  constructor(private http: HttpClient) { }

  //region GET REQUESTS
  getPhones() : Observable<Phone[]> {
    return this.http.get<Phone[]>('/api/phone/');
  }

  getPhone(id: number) : Observable<Phone>{
    return this.http.get<Phone>('/api/phone/'+ id);
  }
  //endregion

  //region PUT/POST REQUESTS
  deletePhone(id: number) : boolean {
    if (this.http.delete('/api/phone/' + id)) {
      return true;
    }
    return false;
  }

  addPhone(phone: Phone) : Observable<Phone>{
    return this.http.post<Phone>('/api/', phone);
  }

  updatePhone(phone: Phone) : Observable<Phone> {
    return this.http.put<Phone>('/api/', phone);
  }
  //endregion
}
