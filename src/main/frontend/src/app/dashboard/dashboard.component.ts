import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule} from "@angular/platform-browser";
import { NgxChartsModule} from "@swimlane/ngx-charts";
import {ItemService} from "../services/item-service/item.service";
import {Items} from "../Types/items";
import {VendorService} from "../services/vendor-service/vendor-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //data to be modeled
  data: [] = [];

  //bar options
  animations = true;
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  gradient = true;
  legendTitle = 'Item Count Vendor Comparison'
  legendPostion = 'bottom'
  showXAxisLabel = true;
  xAxisLabel = 'Vendor';
  showYAxisLabel = true;
  yAxisLabel = 'Item Count'
  view = [300, 500];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor(private vendorService: VendorService) {
    Object.assign(this, this.data)
  }

  ngOnInit(): void {
    this.vendorService.getItemCountByVendor()
      .subscribe(result => {
        console.log(result);
        this.data = result;
      })
  }
  onSelect(event: Event) {
    console.log(event);
  }

}
