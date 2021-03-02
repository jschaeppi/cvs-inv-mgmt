import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Vendor} from "../../Types/Vendor";
import {Phone} from "../../Types/Phone";
import {ActivatedRoute} from "@angular/router";
import {VendorService} from "../../services/vendor-service/vendor-service.service";
import {Address} from "../../Types/Address";

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  vendor: Vendor = new Vendor();
  vendorEdit: FormGroup;
  submitted: boolean = false;
  error: boolean = false;
  vendorId: number = 0;

  constructor(private fb: FormBuilder, private vendorService: VendorService, private route: ActivatedRoute) {
    this.vendorEdit = this.fb.group(this.vendor)
    this.route.params.subscribe(param => this.vendorId = +param.id);
  }

  ngOnInit(): void {
    this.vendorService.getVendor(this.vendorId)
      .subscribe(vendor => {
        this.vendor = vendor;
        if (this.vendor != null) {
          this.buildForm();
        }

      })
  }

  buildForm() {
      this.vendorEdit = this.fb.group({
        id: this.vendor.id,
        version: this.vendor.version,
        name: this.fb.control(this.vendor.name),
        address: this.addAddress(),
        phone: this.addPhone()
      });
    console.log(this.vendorAddress);
    console.log(this.vendorPhone);
  }

  addAddress() {
    if (!this.vendor) {
      return this.fb.group({
        id: 0,
        version: 0,
        street: '',
        street2: '',
        city: '',
        state: '',
        zip: 0
      })
    }
    return this.fb.group({
      id: this.vendor.id,
      version: this.vendor.version ,
      street: this.fb.control(this.vendor.address.street),
      street2: this.fb.control(this.vendor.address.street2),
      city: this.fb.control(this.vendor.address.city),
      state: this.fb.control(this.vendor.address.state),
      zip: this.fb.control(this.vendor.address.zip)
    })
  }

  addPhone() {
      return this.fb.group({
        id: this.vendor.id,
        version: this.vendor.version,
        area_code: this.fb.control(this.vendor.phone.area_code),
        number: this.fb.control(this.vendor.phone.number),
      })
    }

  get vendorAddress() {
    return this.vendorEdit.get('address');
  }

  get vendorPhone() {
    return this.vendorEdit.get('phone');
  }
  resetForm() {
    this.vendorEdit.reset();
  }
  submit() {
    let savedVendor: Vendor;
    if (this.vendorEdit.valid) {
      console.log(this.vendorEdit);
      this.submitted = true;
      this.vendorService.addVendor(this.vendorEdit.value)
        .subscribe(vendor => {
          savedVendor = vendor;
          console.log(savedVendor);
        })
    } else {
      this.submitted = false;
      this.error = true;
    }
  }
}
