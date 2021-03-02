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
  items: Items[] = [];
  itemCatName: string | null = '';
  fetchingInformation: boolean = false;
  errorStatus: boolean = false;

  constructor(private http: HttpClient, private routeParam: ActivatedRoute, private route: Router, private itemService: ItemService) {
    this.route.events.subscribe(event => {
      this.items = [];
      this.routeChange(event);
    })
  }
  ngOnInit(): void {

  }

  routeChange(event:Event) {
    if (event instanceof NavigationStart) {
      this.fetchingInformation = true;

    }
    else if (event instanceof NavigationEnd) {
      const id = this.routeParam.snapshot.paramMap.get('id');
      this.itemCatName = this.routeParam.snapshot.paramMap.get("catName");
      if (this.itemCatName == null) {
        this.itemService.getItems()
          .subscribe(itemList => {
            this.fetchingInformation = false;
            this.items = itemList;
          }, error => {
            console.log(error);
            this.errorStatus = true;
          });
      } else if(this.itemCatName != null){
        this.itemService.getByItemCat(this.itemCatName)
          .subscribe(itemList => {
            this.items = itemList;
            this.fetchingInformation = false;
          }, error => {
            console.log(error);
            this.errorStatus = true;
            console.log(this.errorStatus);
            this.route.navigate(['/dashboard']);
          });
      }
    }
  }
}
