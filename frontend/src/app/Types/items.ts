import {ItemsInterface} from "./Interface/itemsInterface";
import {Cat3} from "./cat3";
import {Vendor} from "./Vendor";

export class Items implements ItemsInterface {
  id = 0;
  version = 0;
  name = '';
  description = '';
  sku = '';
  price = 0;
  vendor = new Vendor();
  cat3 = new Cat3();
}

