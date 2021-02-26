import { Component, OnInit } from '@angular/core';
import {Cat3} from "../Types/cat3";
import {Cat2} from "../Types/cat2";
import {Cat1} from "../Types/cat1";
import {Items} from "../Types/items";
import {ItemFormData} from "../Types/itemFormData";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-inv-item-edit',
  templateUrl: './inv-item-edit.component.html',
  styleUrls: ['./inv-item-edit.component.css']
})
export class InvItemEditComponent implements OnInit {

  //Item object for retrieval and post
/*  items: Items = {
    id: 0,
    version: 0,
    name: '',
    description: '',
    sku: '',
    price: 0,
    cat3: {},
    vendor: {}
  };*/
  //Item id pulled from url
  items: Items = new Items();
  itemId: number = 0;
  cat3Name: string = '';
  //Categories for item
  itemLevel: Cat3[] = [];

  constructor(private http: HttpClient, private router: Router, private routeParam: ActivatedRoute) {}


  ngOnInit(): void {
    this.routeParam.params
      .subscribe(param => {
        console.log(+param.id);
        this.itemId = +param.id;
      })
    this.retrieveItem(this.itemId)
      .subscribe( item => {
        console.log(item);
        this.buildItem(item);
        console.log(this.items);
      }, error => {
        console.log(error);
      })
/*    this.retrieveTopLevelCategories()
      .subscribe(cats => {
        this.topLevel = cats;
      })
    this.retrieveMidLevelCategories()
      .subscribe(cats => {
        this.midLevel = cats;
      })*/

    this.retrieveItemLevelCategories()
      .subscribe(cats => {
        this.itemLevel = cats;
      })


  }
  //Retrieval http requests
  retrieveItem(id: number): Observable<Items> {
    return this.http.get<Items>('/api/items/' + this.itemId)
  }

  retrieveTopLevelCategories() : Observable<Cat1[]> {
    return this.http.get<Cat1[]>('/api/cat1/');
  }

  retrieveMidLevelCategories() : Observable<Cat2[]> {
    return this.http.get<Cat2[]>('/api/cat2/');
  }

  retrieveItemLevelCategories() : Observable<Cat3[]> {
    return this.http.get<Cat3[]>('/api/cat3/');
  }

  //Reset form when pushed cancel
  resetForm() {}

  //Building item for the form
  buildItem(item: object) {
    this.items.id = item.id;
    this.items.version = item.version;
    this.items.name = item.name;
    this.items.description = item.description;
    this.items.sku = item.sku;
    this.items.price = item.price;
    this.items.cat3 = item.cat3;
    this.cat3Name = item.cat3.catName;
    this.items.cat3_id = item.cat3.id;
  }
  updateModel() {
    this.http.get<Cat3>('/api/cat3/' + this.items.cat3_id)
      .subscribe((result => {
        console.log(result);
        this.items.cat3 = result;
        console.log(this.items.cat3);
      }))
  }
  //POSTING FORM
  submit(f: NgForm) {
    console.log(this.items.cat3_id);
    this.http.put('/api/items/', this.items)
      .subscribe(async result => {
        console.log(result);
        await this.router.navigateByUrl('/cat/' + this.items.cat3.catName);
          },
        error =>  {
          console.log(error);
        })
      }
}
