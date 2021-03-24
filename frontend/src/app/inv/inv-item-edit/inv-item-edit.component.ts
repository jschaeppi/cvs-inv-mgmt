import { Component, OnInit } from '@angular/core';
import {Cat3} from "../../Types/cat3";
import {Items} from "../../Types/items";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {ItemService} from "../../services/item-service/item.service";
import {ItemLevelCatService} from "../../services/item-levelCat-service/item-level-cat.service";
import {Vendor} from "../../Types/Vendor";
import {VendorService} from "../../services/vendor-service/vendor-service.service";
import {Observable} from "rxjs";
import {Cat2} from "../../Types/cat2";

@Component({
  selector: 'app-inv-item-edit',
  templateUrl: './inv-item-edit.component.html',
  styleUrls: ['./inv-item-edit.component.css']
})
export class InvItemEditComponent implements OnInit {

  //Item object for retrieval and post
  items: Items = new Items();

  //URL params pulled from url
  itemId: number = 0;

  //Categories for item
  itemLevel: Observable<Cat3[]>;
  itemVendor: Observable<Vendor[]>;
  itemEditForm: FormGroup;
  itemInfo: Items;

  constructor(private fb: FormBuilder,
              private router: Router,
              private routeParam: ActivatedRoute,
              private itemService: ItemService,
              private itemCatService: ItemLevelCatService,
              private vendorService: VendorService) {
    this.itemInfo = new Items();
    this.itemEditForm = this.initForm()
    this.routeParam.params.subscribe(id => this.itemId = +id.id)
    this.itemVendor = this.vendorService.getVendors();
    this.itemLevel = this.itemCatService.getItemLevelCats();
  }

  ngOnInit(): void {

    this.itemService.getItem(this.itemId)
      .subscribe( item => {
        this.loadEditForm(item);
      }, error => {
        console.log(error);
      })

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
      location: this.addLocation(),
      cat3: this.addCat3()
    })
  }
  loadEditForm(item: Items) {
    this.itemInfo = item;
    this.itemEditForm.patchValue(this.itemInfo);
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

  addLocation() : AbstractControl {
    return this.fb.group({
      store_code: this.fb.control(''),
      address: this.addAddress(),
      phone: this.addPhone()
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
  //Reset form when pushed cancel
  resetForm() {
    // this.loadEditForm(this.itemInfo);
    this.itemEditForm.reset();
  }

  //Update ItemCat for Item
  updateItemCat(id: number) {
    this.itemCatService.getItemLevelCatById(id)
      .subscribe(result => {
        this.itemEditForm.patchValue({
          cat3: {
            id: result.id,
            version: result.version,
            catName: result.catName,
            cat2: result.cat2
          }
        });
      });
  }

  //Update ItemVendor for Item
  updateItemVendor(id: number) {
    this.vendorService.getVendor(id)
      .subscribe(vendor => {
        this.itemEditForm.patchValue({
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
  //POSTING FORM
  submit() {
    if (this.itemEditForm.valid) {
      if (this.itemEditForm.dirty) {
        const i = {...this.itemInfo, ...this.itemEditForm.value}
        this.itemService.updateItem(i)
          .subscribe(async result => {
              await this.router.navigateByUrl('/inv/cat/' + result.cat3.catName);
            },
            error =>  {
              console.log(error);
            })
        }
      }
    }

}
