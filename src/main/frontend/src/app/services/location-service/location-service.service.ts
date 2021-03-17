import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Location} from "../../Types/Location";
import {Router} from "@angular/router";
import {CommonFunctions} from "../../common/commonFunctions";

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  public locations$: Observable<Location[]> = of();
  public location: Location = new Location();
  public testLocation: Location;
  comFunc = new CommonFunctions();
  constructor(private http: HttpClient, private router: Router) {
    this.testLocation = new Location();
  }

  locationDetails(locationId: number) {
      this.getLocation(locationId)
        .subscribe(location => {
          this.location = location;
        })
  }

  locationList() {
    this.locations$ = this.getLocations();
  }


  //region GET REQUESTS
  getLocations() : Observable<Location[]> {
    return this.http.get<Location[]>(this.comFunc.baseUrl +'/api/location/');
  }

  getLocation(id: number) : Observable<Location>{
    return this.http.get<Location>(this.comFunc.baseUrl +'/api/location/'+ id);
  }

  deleteLocation(location: Location) : Observable<number>{
    return this.http.put<number>(this.comFunc.baseUrl +'/api/location/delete/', location);
  }
  //endregion

  //region PUT/POST REQUESTS
  addLocation(location: Location) : Observable<Location>{
    return this.http.post<Location>(this.comFunc.baseUrl +'/api/location/', location);
  }

  updateLocation(location: Location) : Observable<Location> {
    return this.http.put<Location>(this.comFunc.baseUrl +'/api/location/', location);
  }
  //endregion
}
