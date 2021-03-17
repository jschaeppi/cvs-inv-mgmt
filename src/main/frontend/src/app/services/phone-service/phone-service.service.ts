import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Phone} from "../../Types/Phone";
import {CommonFunctions} from "../../common/commonFunctions";

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  comFunc = new CommonFunctions();
  constructor(private http: HttpClient) { }

  //region GET REQUESTS
  getPhones() : Observable<Phone[]> {
    return this.http.get<Phone[]>(this.comFunc.baseUrl +'/api/phone/');
  }

  getPhone(id: number) : Observable<Phone>{
    return this.http.get<Phone>(this.comFunc.baseUrl +'/api/phone/'+ id);
  }
  //endregion

  //region PUT/POST REQUESTS
  deletePhone(id: number) : boolean {
    if (this.http.delete(this.comFunc.baseUrl +'/api/phone/' + id)) {
      return true;
    }
    return false;
  }

  addPhone(phone: Phone) : Observable<Phone>{
    return this.http.post<Phone>(this.comFunc.baseUrl +'/api/', phone);
  }

  updatePhone(phone: Phone) : Observable<Phone> {
    return this.http.put<Phone>(this.comFunc.baseUrl +'/api/', phone);
  }
  //endregion
}
