import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Items} from "../../Types/items";
import {ActivatedRoute, Event, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {ItemService} from "../../services/item-service/item.service";

@Component({
  selector: 'app-inv-item-table',
  templateUrl: './inv-item-table.component.html',
  styleUrls: ['./inv-item-table.component.css']
})
export class InvItemTableComponent implements OnInit {
  items$: Observable<Items[]> = of();
  itemCatName: string | null;
  fetchingInformation: boolean = false;
  errorStatus: boolean = false;

  constructor(private http: HttpClient,
              private routeParam: ActivatedRoute,
              private route: Router,
              private itemService: ItemService) {
    this.itemCatName = this.routeParam.snapshot.paramMap.get('catName');
      this.route.events.subscribe(event => {
        this.routeChange(event);
    })
  }

  ngOnInit(): void {
    this.errorStatus = false;
    this.items$ = this.loadItems();
    this.fetchingInformation = false;
  }

  routeChange(event: Event) {
    if (event instanceof NavigationStart) {
      this.fetchingInformation = true;

    } else if (event instanceof NavigationEnd) {
      this.itemCatName = this.routeParam.snapshot.paramMap.get("catName");
      this.errorStatus = false;
      this.items$ = this.loadItems();
      this.fetchingInformation = false;
    }
  }
  deleteItem(item: Items) {
    // alert('Are you sure you want to delete item ' + item.name);
    this.itemService.deleteItem(item)
      .subscribe(success => {
        if (success == 1) {
          this.ngOnInit();
        }
      })
  }

  loadItems(): Observable<Items[]> {
    if (this.itemCatName == null) {
      return this.itemService.getItems();
    } else {
      return this.itemService.getByItemCat(this.itemCatName);
    }
  }
}
