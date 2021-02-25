import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Items} from "../Types/items";
import {ActivatedRoute, Event, NavigationEnd, Router} from "@angular/router";
import {ClarityIcons} from "@clr/icons";

@Component({
  selector: 'app-inv-item-table',
  templateUrl: './inv-item-table.component.html',
  styleUrls: ['./inv-item-table.component.css']
})
export class InvItemTableComponent implements OnInit {
  items: Items[] = [];
  itemCatName: string | null = '';

  constructor(private http: HttpClient, private catName: ActivatedRoute, private route: Router) {
    this.route.events.subscribe(event => {
      this.items = [];
      this.routeChange(event);
    })
  }
  ngOnInit(): void {

  }

  getItems() : Observable<Items[]> {
    return this.http.get<Items[]>('/api/items/');

  }

  getItemByName(catName: string | null) : Observable<Items[]> {
      return this.http.get<Items[]>('/api/items/cat/' + catName);
  }

  routeChange(event:Event) {
    if (event instanceof NavigationEnd) {
      this.itemCatName = this.catName.snapshot.paramMap.get("catName");
      if (this.itemCatName == null) {
        this.getItems()
          .subscribe(itemList => {
            this.items = itemList;
          });
      } else {
        this.getItemByName(this.itemCatName)
          .subscribe(itemList => {
            this.items = itemList;
          })
      }
    }
  }
}
