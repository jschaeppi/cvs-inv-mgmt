import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Vendor} from "../../Types/Vendor";
import {ActivatedRoute, Router} from "@angular/router";
import {VendorService} from "../../services/vendor-service/vendor-service.service";

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.css']
})
export class VendorAddComponent implements OnInit {
  vendor: Vendor = new Vendor();
  vendorAdd: FormGroup;
  submitted: boolean = false;
  error: boolean = false;

  constructor(private fb: FormBuilder,
              private vendorService: VendorService,
              private route: ActivatedRoute,
              private router: Router
  ) {
    this.vendorAdd = this.fb.group(this.vendor)
  }

  ngOnInit(): void {
        this.buildForm();
  }

  buildForm() {
    let name: string;
      name = '';

    this.vendorAdd = this.fb.group({
      name: this.fb.control(name),
      address: this.addAddress(),
      phone: this.addPhone()
    })
      this.addAddress();
      this.addPhone()
  }

  addAddress(): AbstractControl {
    let zip: number = 0;
    let street: string = '',
      street2: string = '',
      city: string = '',
      state: string = '';

      return this.fb.group({
        street: this.fb.control(street),
        street2: this.fb.control(street2),
        city: this.fb.control(city),
        state: this.fb.control(state),
        zip: this.fb.control(zip)
      })
  }

  addPhone(): AbstractControl{
    let area_code:number = 0, number: number = 0;
      return this.fb.group({
        area_code: this.fb.control(area_code),
        number: this.fb.control(number),
      })
  }

  get vendorAddress() {
    return this.vendorAdd.get('address');
  }

  get vendorPhone() {
    return this.vendorAdd.get('phone');
  }
  resetForm() {
    this.buildForm();
  }

  saveComplete(savedVendor: Vendor) {
    this.router.navigate(['/vendor/', {vendor: savedVendor.name}])
  }
  submit() {
    let savedVendor: Vendor;
    if (this.vendorAdd.valid) {
        console.log(this.vendorAdd);
        this.submitted = true;
        this.vendorService.addVendor(this.vendorAdd.value)
           .subscribe(vendor => {
             savedVendor = vendor;
             this.saveComplete(savedVendor)
             console.log(savedVendor);
           })
      // this.vendorAdd.reset();
    } else {
      this.submitted = false;
      this.error = true;
    }
  }
}
