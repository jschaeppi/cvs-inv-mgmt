import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Location} from "../../Types/Location";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  public locations$: Observable<Location[]> = of();
  public location: Location = new Location();
  public testLocation: Location;
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
    return this.http.get<Location[]>('/api/location/');
  }

  getLocation(id: number) : Observable<Location>{
    return this.http.get<Location>('/api/location/'+ id);
  }

  deleteLocation(location: Location) : Observable<number>{
    return this.http.put<number>('/api/location/delete/', location);
  }
  //endregion

  //region PUT/POST REQUESTS
  addLocation(location: Location) : Observable<Location>{
    return this.http.post<Location>('/api/location/', location);
  }

  updateLocation(location: Location) : Observable<Location> {
    return this.http.put<Location>('/api/location/', location);
  }
  //endregion
}
