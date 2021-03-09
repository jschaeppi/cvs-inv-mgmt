import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Location} from "../../Types/Location";

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  public locations: Observable<Location> = of();
  public location: Location = new Location();
  constructor(private http: HttpClient) { }

  locationDetails(locationId?: number) {
    if (locationId) {
      this.getLocation(locationId)
        .subscribe(location => {
          this.location = location;
        })
      console.log(this.locations);
    } else {
      this.locations = this.getLocations();
    }
  }
  //region GET REQUESTS
  getLocations() : Observable<Location[]> {
    return this.http.get<Location[]>('/api/location/');
  }

  getLocation(id: number) : Observable<Location>{
    return this.http.get<Location>('/api/location/'+ id);
  }

  deleteLocation(id: number) : boolean {
    if (this.http.delete('/api/location/' + id)) {
      return true;
    }
    return false;
  }
  //endregion

  //region PUT/POST REQUESTS
  addLocation(location: Location) : Observable<Location>{
    console.log(location);
    return this.http.post<Location>('/api/location/', location);
  }

  updateLocation(location: Location) : Observable<Location> {
    return this.http.put<Location>('/api/location/', location);
  }
  //endregion
}
