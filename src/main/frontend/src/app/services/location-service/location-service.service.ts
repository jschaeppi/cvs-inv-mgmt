import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor(private http: HttpClient) { }

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
    return this.http.post<Location>('/api/', location);
  }

  updateLocation(location: Location) : Observable<Location> {
    return this.http.put<Location>('/api/', location);
  }
  //endregion
}
