import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Items} from "../Types/items";
import {ActivatedRoute, Event, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {ItemService} from "../services/item-service/item-service.service";

@Component({
  selector: 'app-inv-item-table',
  templateUrl: './inv-item-table.component.html',
  styleUrls: ['./inv-item-table.component.css']
})
export class InvItemTableComponent implements OnInit {
  items: Observable<Items[]>;
  itemCatName: string | null = '';
  fetchingInformation: boolean = false;
  errorStatus: boolean = false;

  constructor(private http: HttpClient, private routeParam: ActivatedRoute, private route: Router, private itemService: ItemService) {
    this.route.events.subscribe(event => {
      this.routeChange(event);
    })
    this.items = this.loadItems();
    if (this.items == null) {
      this.fetchingInformation = false;
      this.errorStatus = true;
    } else {
      this.fetchingInformation = false;
      this.errorStatus = false;
    }
  }

  ngOnInit(): void {

  }

  routeChange(event: Event) {
    if (event instanceof NavigationStart) {
      this.fetchingInformation = true;

    } else if (event instanceof NavigationEnd) {
      this.itemCatName = this.routeParam.snapshot.paramMap.get("catName");
      this.errorStatus = false;
      this.items = this.loadItems();
    }
  }

  loadItems(): Observable<Items[]> {
    if (this.itemCatName == null) {
      return this.itemService.getItems();
    } else {
      return this.itemService.getByItemCat(this.itemCatName);
    }
  }
}
