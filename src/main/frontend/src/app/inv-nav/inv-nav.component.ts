import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Cat3} from "../Types/cat3";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Cat2} from "../Types/cat2";
import {Cat1} from "../Types/cat1";
import {ActivatedRoute} from "@angular/router";
import {Items} from "../Types/items";
import {Cats} from "../Types/cats";

@Component({
  selector: 'app-inv-nav',
  templateUrl: './inv-nav.component.html',
  styleUrls: ['./inv-nav.component.css']
})
export class InvNavComponent implements OnInit {

  title:string = "Inventory Management";
  cat1: Cat1[] = [];
  cat3: Cat3[] = [];
  navLinks: any = [];
  catArray: object = [];
  constructor(private http: HttpClient) { }


  ngOnInit(): void {

    this.getTopNavCat();
  }

  getTopNavCat(){
    this.http.get<Cat1[]>('/api/cat1/')
      .subscribe(topCat => {
        console.log('I\'m in the loop');
        this.cat1 = topCat;
        console.log(this.cat1);
        this.catSorter(this.cat1);
        console.log(this.cat1);
        topCat.forEach(cat => {
          this.buildNav(cat);
        })
      })
  }

   buildNav(cat1: Cat1) {
    let nav: object = {};
    console.log(cat1);
        this.http.get<Cat3[]>('/api/cat3/' + cat1.name)
          .subscribe(itemCat => {
            this.cat3 = itemCat;
            nav = {
              id: cat1.id,
              version: cat1.version,
              name: cat1.name,
              catItems: this.cat3
            }
              this.navLinks.push(nav);
          })
  }
  catSorter(cat1: Cat1[]){
    this.cat1 = cat1.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });

  }

}
