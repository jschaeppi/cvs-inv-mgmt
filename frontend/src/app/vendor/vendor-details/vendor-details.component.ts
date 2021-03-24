import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Params} from "@angular/router";
import {Observable, of} from "rxjs";
import {Vendor} from "../../Types/Vendor";
import {VendorService} from "../../services/vendor-service/vendor-service.service";

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
  submittedVendor$: Observable<Params>;
  submitted: boolean = false;
  savedVendor: string | null;
  vendorList$: Observable<Vendor[]> = of();
  constructor(private route: ActivatedRoute, private vendorService: VendorService) {
    this.submittedVendor$ = this.route.params;
    this.savedVendor = this.route.snapshot.paramMap.get('vendor');
  }

  ngOnInit(): void {
    if (this.savedVendor) {
      this.submitted = true;
      this.successMsg();
    }
    this.vendorList$ = this.getVendors();
  }

  deleteVendor(vendor: Vendor) {
    this.vendorService.deleteVendor(vendor)
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
  getVendors() : Observable<Vendor[]>{
    return this.vendorService.getVendors();
  }
}
