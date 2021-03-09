import {Component, OnInit} from '@angular/core';
import {Cat3} from "../../Types/cat3";
import {CommonFunctions} from '../../common/commonFunctions'
import {Cat1} from "../../Types/cat1";
import {Observable} from "rxjs";
import {ItemLevelCatService} from "../../services/item-levelCat-service/item-level-cat.service";
import {TopLevelCatService} from "../../services/top-levelCat-service/top-level-cat.service";

@Component({
  selector: 'app-inv-nav',
  templateUrl: './inv-nav.component.html',
  styleUrls: ['./inv-nav.component.css']
})
export class InvNavComponent implements OnInit {

  title:string = "Inventory Management";
  navLinks: any = [{
    id: 0,
    version: 0,
    catName: '',
    catItems: []
  }];
  itemCat: any = [];
  navLoading: boolean = false;
  comFunc = new CommonFunctions();
  constructor(private itemCatService: ItemLevelCatService, private topCatService: TopLevelCatService) { }


  ngOnInit(): void {
    this.getTopNavCat()
      .subscribe(async topCat => {
        await this.comFunc.catSorter(topCat);
        this.navLinks = topCat;
      })
  }

  getItemLevelCat(cat: Cat1, i: number) : Observable<Cat3[]> {
    this.navLoading = true;
    this.itemCatService.getItemLevelCat(cat.catName)
      .subscribe(itemCat => {
        this.navLinks[i].catItems = itemCat;
        this.itemCat = this.comFunc.catSorter(this.navLinks[i].catItems);
      })
    this.navLoading = false;
    return this.itemCat
  }
  getTopNavCat() : Observable<Cat1[]> {
    return this.topCatService.getTopLevelCats();

  }
}
