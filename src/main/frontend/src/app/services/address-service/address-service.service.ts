import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Address} from "../../Types/Address";
import {CommonFunctions} from "../../common/commonFunctions";

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  comFunc = new CommonFunctions();
  constructor(private http: HttpClient) { }

  //region GET REQUESTS
  getAddresss() : Observable<Address[]> {
    return this.http.get<Address[]>(this.comFunc.baseUrl +'/api/address/');
  }

  getAddress(id: number) : Observable<Address>{
    return this.http.get<Address>(this.comFunc.baseUrl +'/api/address/'+ id);
  }
  //endregion

  //region PUT/POST REQUESTS
  deleteAddress(id: number) : boolean {
    if (this.http.delete(this.comFunc.baseUrl +'/api/address/' + id)) {
      return true;
    }
    return false;
  }

  addAddress(address: Address) : Observable<Address>{
    return this.http.post<Address>(this.comFunc.baseUrl +'/api/', address);
  }

  updateAddress(address: Address) : Observable<Address> {
    return this.http.put<Address>(this.comFunc.baseUrl +'/api/', address);
  }
  //endregion
}
