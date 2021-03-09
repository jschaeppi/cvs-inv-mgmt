import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Items} from "../../Types/items";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Event, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {ItemService} from "../../services/item-service/item-service.service";
import {Location} from "../../Types/Location";
import {LocationServiceService} from "../../services/location-service/location-service.service";

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  fetchingInformation: boolean = false;
  errorStatus: boolean = false;
  address: string = '';
  storeId: string | null = '';

  constructor(private http: HttpClient, private routeParam: ActivatedRoute, private route: Router, private itemService: ItemService, private locationService: LocationServiceService) {
    this.route.events.subscribe(event => {
      this.routeChange(event);
    })

/*    if (locationService.locations) {
      this.address = locationService.locations.
    }*/

  }

  ngOnInit(): void {
    // this.locationService.getLocations();
  }

  routeChange(event: Event) {
    if (event instanceof NavigationStart) {
      this.fetchingInformation = true;

    } else if (event instanceof NavigationEnd) {
      this.storeId = this.routeParam.snapshot.paramMap.get("store");
      this.errorStatus = false;
      if (this.storeId) {
        this.locationService.locationDetails(+this.storeId)
      }
    }
  }
}
