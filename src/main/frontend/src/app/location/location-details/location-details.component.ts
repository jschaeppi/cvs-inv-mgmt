import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Event, NavigationEnd, NavigationStart, Router} from "@angular/router";
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
  storeId: string | null;
  submitted: boolean = false;
  savedLocation: string | null = '';

  constructor(private http: HttpClient,
              private routeParam: ActivatedRoute,
              private route: Router,
              public locationService: LocationServiceService) {
    this.savedLocation = this.routeParam.snapshot.paramMap.get('store');
    this.storeId = this.routeParam.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.fetchingInformation = false;
    if (this.savedLocation) {
      this.submitted = true;
      this.successMsg();
    } else {
      if (this.storeId != null) {
        this.locationService.locationDetails(+this.storeId);
      }
    }
  }

  deleteLocation(location: any) {
    //@ts-ignore
    this.locationService.deleteLocation(location)
      .subscribe(success => {
        console.log(success);
        if (success == 1) {
          this.route.navigateByUrl('/stores')
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

/*
  routeChange(event: Event) {
    if (event instanceof NavigationStart) {
      this.fetchingInformation = true;
    } else if (event instanceof NavigationEnd) {
      this.storeId = this.routeParam.snapshot.paramMap.get("id");
      this.savedLocation = this.routeParam.snapshot.paramMap.get('store')
      this.submitted = true;
      this.errorStatus = false;
      if (this.storeId) {
        this.locationService.locationDetails(+this.storeId)
      }
    }
  }*/
}
