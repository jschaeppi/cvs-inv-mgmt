import { Component, OnInit } from '@angular/core';
import {Cat3} from "../Types/cat3";
import {Items} from "../Types/items";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {ItemService} from "../services/item-service/item-service.service";
import {ItemLevelCatService} from "../services/item-levelCat-service/item-level-cat.service";

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
  itemLevel: Cat3[] = [];
  itemEditForm = this.fb.group({
    id: 0,
    version: 0,
    name: '',
    description: '',
    sku: '',
    price: 0,
    cat3_id: 0,
    vendor: {},
    location: {},
    cat3: {
      id: 0,
      version: 0,
      catName: ''
    }
  })
  itemInfo: Items = {
    id: 0,
    version: 0,
    name: '',
    description: '',
    sku: '',
    price: 0,
    cat3_id: 0,
    vendor: {
      address: {
        city: '',
        id: 0,
        state: '',
        street: '',
        street2: '',
        version: 0,
        zip: 0,
      },
      id: 0,
      name: '',
      phone: {
        area_code: 0,
        id: 0,
        number: 0,
        version: 0,
      },
      version: 0
    },
    location: {
      address: {
        city: '',
        id: 0,
        state: '',
        street: '',
        street2: '',
        version: 0,
        zip: 0,

      },
      id: 0,
      phone: {
        area_code: 0,
        id: 0,
        number: 0,
        version: 0,
      },
      store_code: '',
      version: 0,
    },
    cat3: {
      id: 0,
      version: 0,
      catName: '',
      cat2: {}
    }
  }
  constructor(private fb: FormBuilder, private router: Router, private routeParam: ActivatedRoute, private itemService: ItemService, private itemCatService: ItemLevelCatService) {
  }

  ngOnInit(): void {
    this.routeParam.params
      .subscribe(param => {
        this.itemId = +param.id;
      })

    this.itemService.getItem(this.itemId)
      .subscribe( item => {
        this.loadEditForm(item);
      }, error => {
        console.log(error);
      })

    this.itemCatService.getItemLevelCats()
      .subscribe(cats => {
        this.itemLevel = cats;
      })


  }

  loadEditForm(item: Items) {
    this.itemInfo = item;
    this.itemInfo.cat3_id = item.cat3.id;
    this.itemEditForm.setValue(this.itemInfo);
  }
  //Reset form when pushed cancel
  resetForm() {
    this.loadEditForm(this.itemInfo);
  }

  //Update ItemCat for Item
  updateModel() {
    this.itemCatService.getItemLevelCatById(this.itemEditForm.controls.cat3_id.value)
      .subscribe(result => {
        this.itemEditForm.patchValue({
          cat3_id: result.id,
          cat3: {
            id: result.id,
            version: result.version,
            catName: result.catName,
            cat2: result.cat2
          }
        });
      });
    }
  //POSTING FORM
  submit() {
    this.itemService.updateItem(this.itemEditForm.value)
      .subscribe(async result => {
        await this.router.navigateByUrl('/cat/' + this.itemEditForm.controls.cat3.value.catName);
          },
        error =>  {
          console.log(error);
        })
      }
}
