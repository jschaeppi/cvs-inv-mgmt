import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.css']
})
export class VendorAddComponent implements OnInit {

  vendorAdd: FormGroup = this.fb.group( {
    id: [0],
    name: [''],
    version: [0],
    phone: this.fb.group({
    area_code: [0],
    id: [0],
    number: [0],
    version: [0],
  }),
    address: this.fb.group ({
      id: [0],
      state: [''],
      street: [''],
      street2: [''],
      version: [0],
      zip: [0],
    }),
    vendorForm: this.fb.array([
      this.fb.control('')
    ])

  })

  submitted: boolean = false;
  submittedVendor: string = '';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addVendorControls(this.vendorAdd);
    console.log(this.vendorAdd.get('address'));
  }

  addVendorControls(group: FormGroup) {
    Object.keys(group.controls).forEach(key => {
      console.log(key);
      const control = group.get(key);
      if (control instanceof FormGroup) {
        console.log(group.get(key));
        this.addVendorControls(control);
      } else if (control instanceof FormArray) {
          console.log('Ignoring Form Array');
          return;
      } else {
        console.log(control);
        if (control instanceof AbstractControl) {
          this.vendorControls.push(control);
        }
      }
    });
    console.log(this.vendorControls);
/*    this.vendorControls.push(this.vendorAdd.value.address.value);
    console.log(this.vendorControls);*/
  }

  get vendorControls() {
    return this.vendorAdd.get('vendorForm') as FormArray;
  }
  resetForm() {
    this.vendorAdd.reset({})
  }
  submit() {

  }
}
