import { Injectable } from '@angular/core';
import {Items} from "../../Types/items";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommonFunctions} from "../../common/commonFunctions";

@Injectable({
  providedIn: 'root'
})
export class ItemService{

  comFunc = new CommonFunctions();
  constructor(private http: HttpClient) {
  }

  //region GET REQUESTS
  getItem(id: number) : Observable<Items>{
    return this.http.get<Items>(this.comFunc.baseUrl +'/api/items/' + id);
  }

  getItems() : Observable<Items[]> {
    return this.http.get<Items[]>(this.comFunc.baseUrl +'/api/items/');
}

  getByItemCat(catName: string) : Observable<Items[]> {
    return this.http.get<Items[]>(this.comFunc.baseUrl +'/api/items/cat/' + catName);
  }

  deleteItem(item: Items) : Observable<number>{
    let success:Observable<number> = this.http.put<number>(this.comFunc.baseUrl +'/api/items/delete/', item);
    console.log(success);
    return success;
  }
  //endregion

  //region POST/PUT REQUESTS
  addItem(item: Items) : Observable<Items>{

    return this.http.post<Items>(this.comFunc.baseUrl +'/api/items/', item);
  }

  updateItem(item: Items) : Observable<Items> {
    return this.http.put<Items>(this.comFunc.baseUrl +'/api/items/', item);
  }
  //endregion
}
