import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Event, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {ItemService} from "../../services/item-service/item-service.service";
import {LocationServiceService} from "../../services/location-service/location-service.service";
import {ClrDatagridSortOrder} from "@clr/angular";
import {Location} from "../../Types/Location";

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})

export class LocationListComponent implements OnInit {
  fetchingInformation: boolean = false;
  errorStatus: boolean = false;
  address: string = '';
  storeId: string | null = '';
  savedLocation: string | null;
  submitted: boolean = false;
  descSort = ClrDatagridSortOrder.DESC;
  ascSort = ClrDatagridSortOrder.ASC

  constructor(private http: HttpClient,
              private routeParam: ActivatedRoute,
              private route: Router,
              private itemService: ItemService,
              public locationService: LocationServiceService) {
              this.savedLocation = this.routeParam.snapshot.paramMap.get('name');
              this.storeId = this.routeParam.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.fetchingInformation = false;
    if (this.savedLocation) {
      this.submitted = true;
      this.successMsg();
    } else {
      this.locationService.locationList();
    }
  }

  deleteLocation(location: Location) {
    //@ts-ignore
    this.locationService.deleteLocation(location)
      .subscribe(success => {
        console.log(success);
        if (success == 1) {
          this.ngOnInit();
        }
      })
  }
  successMsg() {
    window.setTimeout((success: boolean) => {
      {
        this.submitted = false;
      }
    }, 5000)
  }
}
