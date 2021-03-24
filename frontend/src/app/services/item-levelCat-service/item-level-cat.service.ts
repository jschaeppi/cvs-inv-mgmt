import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Cat3} from "../../Types/cat3";
import {HttpClient} from "@angular/common/http";
import {CommonFunctions} from "../../common/commonFunctions";

@Injectable({
  providedIn: 'root'
})
export class ItemLevelCatService {

  comFunc = new CommonFunctions();
  constructor(private http: HttpClient) { }

  //region GET REQUESTS
  getItemLevelCats() : Observable<Cat3[]>{
    return this.http.get<Cat3[]>(this.comFunc.baseUrl +'/api/cat3/');
  }

  getItemLevelCatById(id: number) : Observable<Cat3>{
    return this.http.get<Cat3>(this.comFunc.baseUrl +'/api/cat3/' + id);
  }

  getItemLevelCat(topCat: string) : Observable<Cat3[]>{
    return this.http.get<Cat3[]>(this.comFunc.baseUrl +'/api/cat3/topCat/' + topCat);
  }

  deleteItemLevelCat(id: number) : boolean {
    return false;
  }
  //endregion

  //region PUT/POST REQUESTS

  addItemLevelCat(cat: Cat3) : Observable<Cat3>{
    return this.http.post<Cat3>(this.comFunc.baseUrl +'/api/cat3/', cat);
  }

  updateItemLevelCat(cat: Cat3) : Observable<Cat3>{
    return this.http.put<Cat3>(this.comFunc.baseUrl +'/api/cat3/', cat);
  }
  //endregion
}
