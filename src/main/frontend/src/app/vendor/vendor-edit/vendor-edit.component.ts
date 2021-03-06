import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Vendor} from "../../Types/Vendor";
import {ActivatedRoute, Router} from "@angular/router";
import {VendorService} from "../../services/vendor-service/vendor-service.service";

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

  constructor(private fb: FormBuilder, private vendorService: VendorService, private route: ActivatedRoute, private router: Router) {
    this.vendorEdit = this.fb.group(this.vendor)
    this.route.params.subscribe(param => this.vendorId = +param.id);
  }

  ngOnInit(): void {
    this.initForm();
    this.vendorService.getVendor(this.vendorId)
      .subscribe(vendor => {
        this.vendor = vendor;
        console.log(this.vendor);
          this.buildForm();

      })
  }


  initForm() {
    this.vendorEdit = this.fb.group({
      id: this.vendor.id,
      version: this.vendor.version,
      name: this.fb.control(this.vendor.name),
      address: this.addAddress(),
      phone: this.addPhone()
    });
  }
  buildForm() {
/*      this.vendorEdit = this.fb.group({
        id: this.vendor.id,
        version: this.vendor.version,
        name: this.fb.control(this.vendor.name),
        address: this.addAddress(),
        phone: this.addPhone()
      });*/
    this.vendorEdit.patchValue(this.vendor)
  }

  addAddress() {
    if (this.vendor.id == null) {
      return this.fb.group({
        street: this.fb.control(''),
        street2: this.fb.control(''),
        city: this.fb.control(''),
        state: this.fb.control(''),
        zip: this.fb.control(0)
      })
    } else {
      return this.fb.group({
        id: this.vendor.id,
        version: this.vendor.version,
        street: this.fb.control(this.vendor.address.street),
        street2: this.fb.control(this.vendor.address.street2),
        city: this.fb.control(this.vendor.address.city),
        state: this.fb.control(this.vendor.address.state),
        zip: this.fb.control(this.vendor.address.zip)
      })
    }
  }

  addPhone() {
    if (this.vendor.id == null) {
      return this.fb.group({
        area_code: this.fb.control(0),
        number: this.fb.control(0),
      })
    } else {
      return this.fb.group({
        id: this.vendor.id,
        version: this.vendor.version,
        area_code: this.fb.control(this.vendor.phone.area_code),
        number: this.fb.control(this.vendor.phone.number),
      })
    }
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
    if (this.vendorEdit.valid) {
      if (this.vendorEdit.dirty) {
        const v = {...this.vendor, ...this.vendorEdit.value };
        this.submitted = true;
              this.vendorService.updateVendor(v)
                .subscribe(vendor => {
                  console.log(vendor);
                })
        this.router.navigate(['/vendor/', {vendor: v.name}]);
      }
    } else {
      this.submitted = false;
      this.error = true;
    }
  }
}
