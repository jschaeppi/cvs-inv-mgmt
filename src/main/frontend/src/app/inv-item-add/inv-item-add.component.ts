import { Component, OnInit } from '@angular/core';
import {Cat3} from "../Types/cat3";
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {CommonFunctions} from "../common/commonFunctions";
import {ItemLevelCatService} from "../services/item-levelCat-service/item-level-cat.service";
import {ItemService} from "../services/item-service/item-service.service";

@Component({
  selector: 'app-inv-item-add',
  templateUrl: './inv-item-add.component.html',
  styleUrls: ['./inv-item-add.component.css']
})
export class InvItemAddComponent implements OnInit {

  comFunc = new CommonFunctions();
  //Categories for item
  itemLevel: Cat3[] = [];
  itemAddForm = this.fb.group({
    id: 0,
    version: 0,
    name: '',
    description: '',
    sku: '',
    price: '',
    cat3_id: '',
    cat3: {
      id: 0,
      version: 0,
      catName: ''
    }
  })
  submitted: boolean = false;
  submittedItem: string = '';

  constructor(private fb: FormBuilder, private router: Router, private routeParam: ActivatedRoute, private itemService: ItemService, private itemCatService: ItemLevelCatService) { }

  ngOnInit(): void {
    this.itemCatService.getItemLevelCats()
      .subscribe(cats => {
        this.itemLevel = this.comFunc.catSorter(cats);
      })
  }

  //Reset form when pushed cancel
  resetForm() {
    this.itemAddForm.reset();
  }

  //Update form model with new data
  updateModel() {
    this.itemCatService.getItemLevelCatById(this.itemAddForm.controls.cat3_id.value)
      .subscribe((result => {
        this.itemAddForm.patchValue({
          cat3_id: result.id,
          cat3: {
            id: result.id,
            version: result.version,
            catName: result.catName,
            cat2: result.cat2
          }
        });
      }));
  }

  //POSTING FORM
  submit() {
    if (this.itemAddForm.valid) {
      this.itemService.addItem(this.itemAddForm.value)
        .subscribe(result => {
            this.submitted = true;
            this.submittedItem = result.name;
            this.itemAddForm.reset();
          },
          error => {
            console.log(error);
          })
    } else {
      this.submitted = false;
    }
  }
}
