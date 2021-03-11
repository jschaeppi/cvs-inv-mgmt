import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Vendor} from "../../Types/Vendor";
import {catchError, tap} from "rxjs/operators";
import {error} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  vendorList: Observable<Vendor[]> = of();
  constructor(private http: HttpClient) { }

  //region GET REQUESTS
  getVendors() : Observable<Vendor[]> {
    return this.http.get<Vendor[]>('/api/vendor/');
  }

  getVendor(id: number) : Observable<Vendor>{
    return this.http.get<Vendor>('/api/vendor/'+ id);
  }

  deleteVendor(vendor: Vendor) : Observable<number> {
    return this.http.put<number>('/api/vendor/delete/', vendor)
  }
//endregion

  //region PUT/POST REQUESTS
  addVendor(vendor: Vendor) : Observable<Vendor>{
      return this.http.post<Vendor>('/api/vendor/', vendor);
  }

  updateVendor(vendor: Vendor) : Observable<Vendor> {
      return this.http.put<Vendor>('/api/vendor/', vendor);
  }
  //endregion
}
