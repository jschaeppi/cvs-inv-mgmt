import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Params} from "@angular/router";
import {Observable} from "rxjs";
import {Vendor} from "../../Types/Vendor";
import {VendorService} from "../../services/vendor-service/vendor-service.service";

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
  submittedVendor$: Observable<Params>;
  vendor: string;
  submitted: boolean = false;
  vendorList: Observable<Vendor[]>
  constructor(private route: ActivatedRoute, private vendorService: VendorService) {
    this.submittedVendor$ = this.route.params;
    this.vendor = '';
    this.vendorList = this.getVendors();

  }

  ngOnInit(): void {
    if (this.vendor) {
      this.submitted = true;
    }
  }

  getVendors() : Observable<Vendor[]>{
    return this.vendorService.getVendors();
  }
}
