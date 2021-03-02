import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Vendor} from "../../Types/Vendor";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  //region GET REQUESTS
  getVendors() : Observable<Vendor[]> {
    return this.http.get<Vendor[]>('/api/vendor/');
  }

  getVendor(id: number) : Observable<Vendor>{
    return this.http.get<Vendor>('/api/vendor/'+ id);
  }

  deleteVendor(id: number) : boolean {
    if (this.http.delete('/api/vendor/' + id)) {
      return true;
    }
    return false;
  }
//endregion

  //region PUT/POST REQUESTS
  addVendor(vendor: Vendor) : Observable<Vendor>{
    console.log('In the angular service')
      return this.http.post<Vendor>('/api/vendor/', vendor);
  }

  updateVendor(vendor: Vendor) : Observable<Vendor> {
    console.log('I\'m in the update method');
      return this.http.put<Vendor>('/api/vendor/', vendor);
  }
  //endregion
}
