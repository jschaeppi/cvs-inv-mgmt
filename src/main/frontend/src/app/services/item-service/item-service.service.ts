import { Injectable } from '@angular/core';
import {Items} from "../../Types/items";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService{

  constructor(private http: HttpClient) { }

  //region GET REQUESTS
  getItem(id: number) : Observable<Items>{
    return this.http.get<Items>('/api/items/' + id);
  }

  getItems() : Observable<Items[]> {
    return this.http.get<Items[]>('/api/items/');
}

  getByItemCat(catName: string) : Observable<Items[]> {
    return this.http.get<Items[]>('/api/items/cat/' + catName);
  }

  deleteItem() : boolean{
    return false;
  }
  //endregion

  //region POST/PUT REQUESTS
  addItem(item: Items) : Observable<Items>{
    return this.http.post<Items>('/api/items/', item);
  }

  updateItem(item: Items) : Observable<Items> {
    return this.http.put<Items>('/api/items/', item);
  }
  //endregion
}
