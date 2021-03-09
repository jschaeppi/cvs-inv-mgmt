import { Component, OnInit } from '@angular/core';
import {Location} from "../../Types/Location";
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {LocationServiceService} from "../../services/location-service/location-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {
  location: Location = new Location();
  locationId: string | null = '';
  locationEdit: FormGroup;
  locationDataModel: Location = new Location();
  submitted: boolean = false;
  error: boolean = false;
  constructor(private fb: FormBuilder,
              private locationService: LocationServiceService,
              private route: ActivatedRoute,
              private router: Router
  ) {
    this.locationEdit = this.fb.group(this.location);
    this.locationId = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.initForm();
    if (this.locationId) {
      this.locationService.getLocation(+this.locationId)
        .subscribe(location => {
          console.log(location);
          //@ts-ignore
          this.location = location;
          this.buildForm();
        })
    }
  }

  initForm() {
    this.locationEdit = this.fb.group({
      name: this.fb.control(''),
      store_code: this.fb.control(''),
      address: this.addAddress(),
      phone: this.addPhone()
    });
  }

  buildForm() {
    this.locationEdit = this.fb.group({
      id: this.location.id,
      version: this.location.version,
      name: this.fb.control(this.location.name),
      store_code: this.fb.control(this.location.store_code),
      address: this.addAddress(),
      phone: this.addPhone(),
    })
    this.addAddress();
    this.addPhone()
    console.log(this.locationEdit);
  }

  addAddress(): AbstractControl {
    return this.fb.group({
      id: this.location.address.id,
      version: this.location.address.version,
      street: this.fb.control(this.location.address.street),
      street2: this.fb.control(this.location.address.street2),
      city: this.fb.control(this.location.address.city),
      state: this.fb.control(this.location.address.state),
      zip: this.fb.control(this.location.address.zip)
    })
  }

  addPhone(): AbstractControl{
    return this.fb.group({
      id: this.location.phone.id,
      version: this.location.phone.version,
      area_code: this.fb.control(this.location.phone.area_code),
      number: this.fb.control(this.location.phone.number),
    })
  }

  get locationAddress() {
    return this.locationEdit.get('address');
  }

  get locationPhone() {
    return this.locationEdit.get('phone');
  }
  resetForm() {
    this.buildForm();
  }

  saveComplete(store: Location) {
    this.router.navigate(['/stores/', {store: store.id}])
  }
  submit() {
    let updatedStore: Location = {...this.locationDataModel, ...this.locationEdit.value};
    console.log(updatedStore);
    if (this.locationEdit.valid && this.locationEdit.dirty) {
      console.log(this.locationEdit);
      this.submitted = true;
      this.error = false;
      //@ts-ignore
      this.locationService.updateLocation(updatedStore)
        .subscribe(store => {
          // savedStore = store;
          //@ts-ignore
          this.saveComplete(store);
        })
      this.locationEdit.reset()
    } else {
      this.submitted = false;
      this.error = true;
    }
  }
}
