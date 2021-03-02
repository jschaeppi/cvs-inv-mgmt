/*
import { Injectable } from '@angular/core';
import {ActivatedRoute, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {ItemService} from "../item-service/item-service.service";
import {EMPTY, Observable, of} from "rxjs";
import {take} from "rxjs/operators";
import {Items} from "../../Types/items";

@Injectable({
  providedIn: 'root'
})
export class ItemResolver{

  constructor(private router: Router, private itemService: ItemService) {
  }

  resolve(route: ActivatedRoute, state: RouterStateSnapshot) : Observable<Items> | Observable<never> {
    if (id == null || itemCatName == null) {
      this.router.navigate(['/dashboard']);
      return EMPTY;
    } else if (id != null) {
      return this.itemService.getItem(+id).pipe(
        take(1),
      ).subscribe(item => {
        if (item) {
          return of(item);
        } else {
          this.router.navigate(['/dashboard']);
          return EMPTY;
        }
      })
    } else if (itemCatName != null) {
      return this.itemService.getByItemCat(itemCatName).pipe(
        take(1)
      ).subscribe(item => {
        if (item) {
          return of(item);
        } else {
          return null;
        }
      })
    }
    this.router.navigate(['/dashboard']);
    return EMPTY;
  }
}
*/
