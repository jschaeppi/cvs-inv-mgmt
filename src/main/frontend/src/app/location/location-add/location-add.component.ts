import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {Location} from "../../Types/Location";
import {ActivatedRoute, Router} from "@angular/router";
import {LocationServiceService} from "../../services/location-service/location-service.service";

@Component({
  selector: 'app-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.css']
})
export class LocationAddComponent implements OnInit {
  location: Location = new Location();
  locationAdd: FormGroup;
  submitted: boolean = false;
  error: boolean = false;
  constructor(private fb: FormBuilder,
              private locationService: LocationServiceService,
              private route: ActivatedRoute,
              private router: Router
  ) {
    this.locationAdd = this.fb.group(this.location);
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.locationAdd = this.fb.group({
      name: this.fb.control(''),
      store_code: this.fb.control(''),
      address: this.addAddress(),
      phone: this.addPhone(),
    })
    this.addAddress();
    this.addPhone()
  }

  addAddress(): AbstractControl {
    return this.fb.group({
      street: this.fb.control(''),
      street2: this.fb.control(''),
      city: this.fb.control(''),
      state: this.fb.control(''),
      zip: this.fb.control(0)
    })
  }

  addPhone(): AbstractControl{
    return this.fb.group({
      area_code: this.fb.control(0),
      number: this.fb.control(0),
    })
  }

  get locationAddress() {
    return this.locationAdd.get('address');
  }

  get locationPhone() {
    return this.locationAdd.get('phone');
  }
  resetForm() {
    this.buildForm();
  }

  saveComplete(saveStore: Location) {
    // @ts-ignore
    this.router.navigate(['/stores'])
  }
  submit(){
    if (this.locationAdd.valid && this.locationAdd.dirty) {
      this.submitted = true;
      this.error = false;
      this.locationService.addLocation(this.locationAdd.value)
        .subscribe(store => {
          // @ts-ignore
          this.saveComplete(store);
        })
    } else {
      this.submitted = false;
      this.error = true;
    }
  }
}
