import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Address} from "../../Types/Address";

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  constructor(private http: HttpClient) { }

  //region GET REQUESTS
  getAddresss() : Observable<Address[]> {
    return this.http.get<Address[]>('/api/address/');
  }

  getAddress(id: number) : Observable<Address>{
    return this.http.get<Address>('/api/address/'+ id);
  }
  //endregion

  //region PUT/POST REQUESTS
  deleteAddress(id: number) : boolean {
    if (this.http.delete('/api/address/' + id)) {
      return true;
    }
    return false;
  }

  addAddress(address: Address) : Observable<Address>{
    return this.http.post<Address>('/api/', address);
  }

  updateAddress(address: Address) : Observable<Address> {
    return this.http.put<Address>('/api/', address);
  }
  //endregion
}
