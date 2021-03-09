import { Component, OnInit } from '@angular/core';
import {Location} from "../../Types/Location";
import {Observable} from "rxjs";
import {Items} from "../../Types/items";
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {LocationServiceService} from "../../services/location-service/location-service.service";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../services/item-service/item-service.service";

@Component({
  selector: 'app-location-add-items',
  templateUrl: './location-add-items.component.html',
  styleUrls: ['./location-add-items.component.css']
})
export class LocationAddItemsComponent implements OnInit {
  location: Location = new Location();
  items: Observable<Items[]>;
  locationAddItem: FormGroup;
  submitted: boolean = false;
  error: boolean = false;
  constructor(private fb: FormBuilder,
              private locationService: LocationServiceService,
              private route: ActivatedRoute,
              private itemService: ItemService
  ) {
    this.locationAddItem = this.fb.group(this.location);
    this.items = this.itemService.getItems();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    let name: string;
    name = '';

    this.locationAddItem = this.fb.group({
      name: this.fb.control(''),
      count: this.fb.control(0),
      store_code: this.fb.control(''),
      address: this.addAddress(),
      phone: this.addPhone(),
      items: this.fb.control('')
    })
    this.addAddress();
    this.addPhone()
    console.log(this.locationAddItem);
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
    return this.locationAddItem.get('address');
  }

  get locationPhone() {
    return this.locationAddItem.get('phone');
  }
  resetForm() {
    this.buildForm();
  }
  submit() {
    let savedStore: Location;
    console.log(this.locationAddItem.value);
    if (this.locationAddItem.valid && this.locationAddItem.dirty) {
      console.log(this.locationAddItem);
      this.submitted = true;
      this.error = false;
      this.locationService.addLocation(this.locationAddItem.value)
        .subscribe(store => {
          // savedStore = store;
          console.log(store);
        })
      this.locationAddItem.reset()
    } else {
      this.submitted = false;
      this.error = true;
    }
  }
}
