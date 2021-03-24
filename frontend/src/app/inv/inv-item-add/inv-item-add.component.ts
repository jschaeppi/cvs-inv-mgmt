import { Component, OnInit } from '@angular/core';
import {Cat3} from "../../Types/cat3";
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {CommonFunctions} from "../../common/commonFunctions";
import {ItemLevelCatService} from "../../services/item-levelCat-service/item-level-cat.service";
import {ItemService} from "../../services/item-service/item.service";
import {Cat2} from "../../Types/cat2";
import {VendorService} from "../../services/vendor-service/vendor-service.service";
import {Vendor} from "../../Types/Vendor";
import {Items} from "../../Types/items";

@Component({
  selector: 'app-inv-item-add',
  templateUrl: './inv-item-add.component.html',
  styleUrls: ['./inv-item-add.component.css']
})
export class InvItemAddComponent implements OnInit {

  comFunc = new CommonFunctions();
  //Categories for item
  itemLevel: Observable<Cat3[]>;
  itemAddForm: FormGroup;
  itemVendor: Observable<Vendor[]>;
  submitted: boolean = false;
  error: boolean = false;
  submittedItem: string = '';

  constructor(private fb: FormBuilder,
              private router: Router,
              private routeParam: ActivatedRoute,
              private itemService: ItemService,
              private itemCatService: ItemLevelCatService,
              private vendorService: VendorService) {
    this.itemAddForm = this.initForm()
    this.itemVendor = this.vendorService.getVendors();
    this.itemLevel = this.itemCatService.getItemLevelCats();
  }

  ngOnInit(): void {

  }

  initForm() : FormGroup{
    return this.fb.group ({
      id: this.fb.control(0),
      version: this.fb.control(0),
      name: this.fb.control(''),
      description: this.fb.control(''),
      sku: this.fb.control(''),
      price: this.fb.control(0),
      vendor: this.addVendor(),
      // location: this.addLocation(),
      cat3: this.addCat3()
    })
  }
  addCat3() : AbstractControl {
    return this.fb.group({
      id: 0,
      version: 0,
      catName: this.fb.control(''),
      cat2: Cat2,
    })
  }

  addVendor() : AbstractControl{
    return this.fb.group({
      id: 0,
      version: 0,
      name: this.fb.control(''),
      address: this.addAddress(),
      phone: this.addPhone()
    })
  }

  addAddress() : AbstractControl {
    return this.fb.group({
      id: 0,
      version: 0,
      street: this.fb.control(''),
      street2: this.fb.control(''),
      city: this.fb.control(''),
      state: this.fb.control(''),
      zip: this.fb.control(0)
    })
  }

  addPhone() : AbstractControl {
    return this.fb.group({
      id: 0,
      version: 0,
      area_code: this.fb.control(0),
      number: this.fb.control(0)
    })
  }
  //Update form model with new data
  updateItemCat(id: number) {
    this.itemCatService.getItemLevelCatById(id)
      .subscribe(result => {
        this.itemAddForm.patchValue({
          cat3: {
            id: result.id,
            version: result.version,
            catName: result.catName,
            cat2: result.cat2
          }
        });
      });
  }
  updateItemVendor(id: number) {
    this.vendorService.getVendor(id)
      .subscribe(vendor => {
        this.itemAddForm.patchValue({
          vendor: {
            id: vendor.id,
            version: vendor.version,
            name: vendor.name,
            address: vendor.address,
            phone: vendor.phone
          }
        })
      })
  }

  //Reset form when pushed cancel
  resetForm() {
    this.itemAddForm.reset();
  }

  saveComplete(item: Items) {
    this.router.navigateByUrl('/inv');
  }
  //POSTING FORM
  submit() {
    if (this.itemAddForm.valid && this.itemAddForm.dirty) {
        this.itemService.addItem(this.itemAddForm.value)
          .subscribe(result => {
              this.submitted = true;
              this.error = false;
              this.submittedItem = result.name;
              this.itemAddForm.reset();
              this.saveComplete(result);
            },
            error => {
              console.log(error);
            })
    } else {
      this.submitted = false;
      this.error = true;
    }
  }
}
