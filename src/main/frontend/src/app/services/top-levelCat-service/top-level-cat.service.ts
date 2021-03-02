import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Cat1} from "../../Types/cat1";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TopLevelCatService {

  constructor(private http: HttpClient) { }

  //region GET REQUESTS
  getTopLevelCats() : Observable<Cat1[]>{
    return this.http.get<Cat1[]>('/api/cat1/');
  }

  getTopLevelCatById(id: number) : Observable<Cat1>{
    return this.http.get<Cat1>('/api/cat1/' + id);
  }

  getTopLevelCat(topCat: string) : Observable<Cat1[]>{
    return this.http.get<Cat1[]>('/api/cat1/' + topCat);
  }

  deleteTopLevelCat(id: number) : boolean {
    return false;
  }
  //endregion

  //region PUT/POST REQUESTS

  addTopLevelCat(cat: Cat1) : Observable<Cat1>{
    return this.http.post<Cat1>('/api/cat1/', cat);
  }

  updateTopLevelCat(cat: Cat1) : Observable<Cat1>{
    return this.http.put<Cat1>('/api/cat1/', cat);
  }
  //endregion
}
