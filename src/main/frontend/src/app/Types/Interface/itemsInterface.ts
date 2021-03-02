import {Cat3Interface} from "./Cat3Interface";
import {VendorInterface} from "./VendorInterface";

export interface ItemsInterface {
  id: number,
  version: number,
  name: string,
  description: string,
  sku: string,
  price: number,
  cat3_id?: number,
  vendor: VendorInterface,
  cat3: Cat3Interface
}
