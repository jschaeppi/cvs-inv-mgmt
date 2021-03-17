import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Vendor} from "../../Types/Vendor";
import {CommonFunctions} from "../../common/commonFunctions";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  vendorList: Observable<Vendor[]> = of();
  comFunc = new CommonFunctions();
  constructor(private http: HttpClient) { }

  //region GET REQUESTS
  getVendors() : Observable<Vendor[]> {
    console.log(this.comFunc.baseUrl);
    return this.http.get<Vendor[]>(this.comFunc.baseUrl +'/api/vendor/');
  }

  getItemCountByVendor() : Observable<[]> {
    return this.http.get<[]>(this.comFunc.baseUrl +'/api/vendor/vendorItemCount/')
  }
  getVendor(id: number) : Observable<Vendor>{
    return this.http.get<Vendor>(this.comFunc.baseUrl +'/api/vendor/'+ id);
  }

  deleteVendor(vendor: Vendor) : Observable<number> {
    return this.http.put<number>(this.comFunc.baseUrl +'/api/vendor/delete/', vendor)
  }
//endregion

  //region PUT/POST REQUESTS
  addVendor(vendor: Vendor) : Observable<Vendor>{
      return this.http.post<Vendor>(this.comFunc.baseUrl +'/api/vendor/', vendor);
  }

  updateVendor(vendor: Vendor) : Observable<Vendor> {
      return this.http.put<Vendor>(this.comFunc.baseUrl +'/api/vendor/', vendor);
  }
  //endregion
}
